import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import account from './common/reducers/account';
// import {messages, newsLists} from 'common/reducers/messages';
// import signStatus from 'common/reducers/signStatus';
// import saveSearchInfo from 'common/reducers/saveSearchInfo';
// import flightBooking from 'pages/flight/booking/reducers';
// import flightChange from 'pages/flight/order/reducers';

// TODO 考虑自动生成，而非手动维护列表
export default combineReducers({
  account,
  // messages,
  // newsLists,
  // signStatus,
  // saveSearchInfo,
  // flightBooking,
  // flightChange,
  // routing: routerReducer
});
