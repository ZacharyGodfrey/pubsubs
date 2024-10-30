import Mustache from 'mustache';

import { emptyFolder, copy, readFile, writeFile } from '../lib/file.js';

emptyFolder('dist');
copy('src/assets/favicon.png', 'dist/favicon.png');
copy('data.json', 'dist/data.json');

const template = readFile('src/assets/page.html');
const data = JSON.parse(readFile('data.json'));
const style = readFile('src/assets/style.css');

data.price = data.priceLine.match(/\$\d+\.*\d*/)[0];

const output = Mustache.render(template, data, { style });

writeFile('dist/index.html', output);