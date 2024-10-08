import { writeFile } from '../lib/file.js';

const baseUrl = 'https://services.publix.com/search/productdata/productitems';
const productId = 'd802cbbb-6c81-4fd3-a5ed-acd38895f4b2';
const storeId = '1210';

const key = 'baseProductId';
const value = 'BMO-DSB-100011';

const url = `${baseUrl}?Id=${productId}&StoreNbr=${storeId}`;
const response = await fetch(url).then(res => res.json());
const data = response.find(x => x[key] === value);
const json = JSON.stringify(data, null, 2);

console.log(`URL: ${url}`);
console.log(`JSON: ${json}`);

writeFile('data.json', json);