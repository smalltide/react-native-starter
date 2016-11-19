import { SAY_HELLO, SAY_HELLO_ASYNC } from './types';

export const sayHello = (message) => {
  return {
    type: SAY_HELLO,
    payload: `hello ${message}`
  };
};

export const sayHelloAsync = (message) => {
  return (dispatch) => {
    //do time work here
    setTimeout(() => {
      dispatch({
        type: SAY_HELLO_ASYNC,
        payload: `hello async ${message}`
      });
    }, 2000);
  };
};
