import { Actions } from 'react-native-router-flux';

import { SAY_HELLO } from './types';

export const sayHello = (message) => {
  Actions.asyncHello();

  return {
    type: SAY_HELLO,
    payload: `hello ${message}`
  };
};
