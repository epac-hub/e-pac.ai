import { readFile, writeFile } from 'node:fs/promises';
import { renderToString } from 'react-dom/server';
import App from './App';

const file = new URL('../dist/index.html', import.meta.url);
const html = await readFile(file, 'utf8');
const content = renderToString(<App />);
if (!html.includes('<!--app-html-->')) throw new Error('Static page marker is missing.');
await writeFile(file, html.replace('<!--app-html-->', content));
console.log('Static HTML rendered: ePAC landing page.');
