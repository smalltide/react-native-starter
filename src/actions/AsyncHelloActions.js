import _ from 'lodash';
import { SAY_HELLO_ASYNC } from './types';

export const sayHelloAsync = (message) => {
  return (dispatch) => {
    //do time work here
    _.delay(() => {
      dispatch({
        type: SAY_HELLO_ASYNC,
        payload: `hello async ${message}`
      });
    }, 2000);
  };
};
