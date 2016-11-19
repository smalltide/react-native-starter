import { SAY_HELLO, SAY_HELLO_ASYNC } from '../actions/types';

const INITIAL_STATE = { message: '', asyncMessage: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAY_HELLO:
      return { ...state, message: action.payload };
    case SAY_HELLO_ASYNC:
      return { ...state, asyncMessage: action.payload };
    default:
      return state;
  }
};
