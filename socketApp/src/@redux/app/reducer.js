import {SET_USERS, SET_BG_COLOR, SET_USERTOKEN, SET_USERINFO} from './types';

const initialState = {
  users: [],
  bgColor: '#f0f0f0',
  userToken: null,
  userInfo: null,
};

const reducer = (state = initialState, action) => {
  const {type} = action;

  switch (type) {
    case SET_USERS:
      return {...state, users: action.payload};
      break;
    case SET_BG_COLOR:
      return {...state, bgColor: action.payload};
      break;
    case SET_USERTOKEN:
      return {...state, userToken: action.payload};
      break;
    case SET_USERINFO:
      return {...state, userInfo: action.payload};
      break;
    default:
      break;
  }

  return state;
};

export default reducer;
