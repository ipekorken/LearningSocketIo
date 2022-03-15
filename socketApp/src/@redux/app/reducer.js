import {SET_USERS, SET_BG_COLOR} from './types';

const initialState = {
  users: [],
  bgColor: '#f0f0f0',
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
    default:
      break;
  }

  return state;
};

export default reducer;
