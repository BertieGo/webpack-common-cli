import {handleActions} from 'redux-actions';
import {UPDATE_ACCOUNT_INFO} from '../actions/ActionTypes';

const initialState = {
  accountId: null,
  name: null,
  mail: null,
  partner: null,
  roleId: null,
  roleIds: null,
  groupId: null,
  gtpInfoId: null,
  mobile: null
};

const account = handleActions({
  [UPDATE_ACCOUNT_INFO]: (state, action) => ({
    accountId: action.payload.accountId,
    name: action.payload.name,
    mail: action.payload.mail,
    partner: action.payload.partner,
    roleId: action.payload.roleId,
    roleIds: action.payload.roleIds,
    groupId: action.payload.groupId,
    gtpInfoId: action.payload.gtpInfoId,
    mobile: action.payload.mobile
  })
}, initialState);

export default account;
