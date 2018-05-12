import {createActions} from 'redux-actions';
import {UPDATE_ACCOUNT_INFO} from './ActionTypes';


export const {updateAccountInfo} = createActions({
  [UPDATE_ACCOUNT_INFO]: userInfo => ({...userInfo})
});
