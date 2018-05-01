import child from 'biz/child';
// import child2 from 'biz/child2';
import '@babel/polyfill';
import base from './biz/base.css';
import cssLoader from './biz/css.loader.css';
import './biz/less.loader.less';
import scss from './biz/scss.loader.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component{
  render(){
    return (
      <div className={scss.test}>
        123123123123
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

// window.setInterval(() => {
//   if (a) {
//     base.use();
//     a = false;
//   } else {
//     base.unuse();
//     a = true;
//   };
// },500)