import React from 'react';
import {Provider} from 'react-redux';
import Child from 'biz/child';
import _ from 'lodash';
import base from './biz/base.css';
import cssLoader from './biz/css.loader.css';
import './biz/less.loader.less';
import scss from './biz/scss.loader.scss';

import * as accountActions from './common/actions/account';
import store from './store';

export default class App extends React.Component{

  componentDidMount() {
    _.cloneDeep({a: 2});
    console.log(233);
  }

  dispatchTest = () => {
    store.dispatch(accountActions.updateAccountInfo({
      accountId: 1
    }));
  };

  render(){
    // Provider只能有一个子节点
    return (
      <div>
        <Provider store={store}>
          <div>
            <h1 onClick={this.dispatchTest}>123123</h1>
            <Child/>
          </div>
        </Provider>
      </div>
    )
  }
}
