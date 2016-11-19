import { SAY_HELLO } from './types';

export const sayHello = (message) => {
  return {
    type: SAY_HELLO,
    payload: `hello ${message}`
  };
};
