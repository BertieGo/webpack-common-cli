import child from 'biz/child';
// import child2 from 'biz/child2';
import '@babel/polyfill';
import base from './biz/base.css';
import cssLoader from './biz/css.loader.css';
import './biz/less.loader.less';

let a = true;

document.body.classList = cssLoader.red;

// window.setInterval(() => {
//   if (a) {
//     base.use();
//     a = false;
//   } else {
//     base.unuse();
//     a = true;
//   };
// },500)