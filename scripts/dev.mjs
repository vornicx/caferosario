import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { spawn } from 'node:child_process';

const port = Number(process.env.PORT || 3000);
const root = new URL('..', import.meta.url).pathname;
const dist = join(root, 'dist');

await new Promise((resolve, reject) => {
  const child = spawn(process.execPath, ['scripts/build.mjs'], { cwd: root, stdio: 'inherit' });
  child.on('exit', (code) => code === 0 ? resolve() : reject(new Error(`build exited ${code}`)));
});

const types = { '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.svg':'image/svg+xml', '.xml':'application/xml; charset=utf-8', '.txt':'text/plain; charset=utf-8' };

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);
    let pathname = decodeURIComponent(url.pathname);
    if (pathname.includes('..')) throw new Error('invalid path');
    let target = normalize(join(dist, pathname));
    if (!target.startsWith(dist)) throw new Error('invalid path');
    let info;
    try { info = await stat(target); } catch {}
    if (info?.isDirectory()) target = join(target, 'index.html');
    if (!info && !extname(target)) target = join(target, 'index.html');
    const data = await readFile(target);
    res.writeHead(200, { 'content-type': types[extname(target)] || 'application/octet-stream', 'cache-control':'no-store' });
    res.end(data);
  } catch {
    res.writeHead(404, { 'content-type':'text/plain; charset=utf-8' });
    res.end('404');
  }
});

server.listen(port, '0.0.0.0', () => console.log(`Rosario dev server → http://localhost:${port}`));
