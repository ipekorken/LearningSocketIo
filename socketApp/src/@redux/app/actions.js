import {SET_BG_COLOR, SET_USERS, SET_USERTOKEN, SET_USERINFO} from './types';
export const setUsers = users => ({
  type: SET_USERS,
  payload: users,
});
export const setBgColor = bgColor => ({
  type: SET_BG_COLOR,
  payload: bgColor,
});
export const setUserToken = userToken => ({
  type: SET_USERTOKEN,
  payload: userToken,
});
export const setUserInfo = userInfo => ({
  type: SET_USERINFO,
  payload: userInfo,
});
