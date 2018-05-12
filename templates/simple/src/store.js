import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const reducersFile = require('./reducers');

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

// 初始state
const initialState = {};

const store = createStore(
  require('./reducers').default,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

// Enable Hot Module Replacement (HMR)
if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextReducer = reducersFile.default;
    store.replaceReducer(nextReducer);
  });
}

export default store;
