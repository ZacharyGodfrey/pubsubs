import Mustache from 'mustache';

import { emptyFolder, copy, readFile, writeFile } from '../lib/file.js';

emptyFolder('dist');
copy('data.json', 'dist/data.json');

const template = readFile('src/assets/page.html');

const data = JSON.parse(readFile('data.json'));

data.price = data.priceLine.match(/\$\d+\.*\d*/)[0];

const partials = {
  favicon: readFile('src/assets/favicon.png', 'base64'),
  style: readFile('src/assets/style.css'),
};

const output = Mustache.render(template, data, partials);

writeFile('dist/index.html', output);