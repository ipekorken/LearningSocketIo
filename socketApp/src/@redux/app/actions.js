import {SET_BG_COLOR, SET_USERS} from './types';
export const setUsers = users => ({
  type: SET_USERS,
  payload: users,
});
export const setBgColor = bgColor => ({
  type: SET_BG_COLOR,
  payload: bgColor,
});
