import { resolve } from 'path';
import fs from 'fs-extra';

export const readFile = (path, encoding = 'utf-8') => fs.readFileSync(resolve(path), { encoding });

export const writeFile = (path, content, encoding = 'utf-8') => fs.outputFileSync(resolve(path), content, { encoding });

export const emptyFolder = (path) => fs.emptyDirSync(resolve(path));

export const copy = (src, dest) => fs.copySync(resolve(src), resolve(dest));