import { writeFile } from '../lib/file.js';

const url = 'https://services.publix.com/search/productdata/productitems';
const categoryId = 'd802cbbb-6c81-4fd3-a5ed-acd38895f4b2';
const storeId = '9999';
const productId = 'd802cbbb-6c81-4fd3-a5ed-acd38895f4b2';
const response = await fetch(`${url}?Id=${categoryId}&StoreNbr=${storeId}`);
const json = await response.json();
const data = json.find(x => x.id === productId);

writeFile('data.json', JSON.stringify(data, null, 2));