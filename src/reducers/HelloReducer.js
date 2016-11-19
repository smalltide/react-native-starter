import { SAY_HELLO } from '../actions/types';

const INITIAL_STATE = { message: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAY_HELLO:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};
