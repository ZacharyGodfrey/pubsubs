import Mustache from 'mustache';

import { emptyFolder, readFile, writeFile } from '../lib/file.js';

emptyFolder('dist');

const template = readFile('src/assets/page.html');

const data = JSON.parse(readFile('data.json'));

const partials = {
  favicon: readFile('src/assets/favicon.png', 'base64'),
  style: readFile('src/assets/style.css'),
};

const output = Mustache.render(template, data, partials);

writeFile('dist/index.html', output);