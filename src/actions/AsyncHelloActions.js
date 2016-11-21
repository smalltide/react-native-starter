import { SAY_HELLO_ASYNC } from './types';

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
