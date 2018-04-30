// import child from 'biz/child';
// import child2 from 'biz/child2';
import '@babel/polyfill';

const fun = () => {}

const arr1 = [1, 2, 3];
const arr2 = arr1.map(item => item * 2);
console.log(new Set(arr2));