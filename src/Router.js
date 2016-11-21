import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Hello from './components/Hello';
import AsyncHello from './components/AsyncHello';


const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="hello" component={Hello} title="Hello" initial />
      <Scene key="asyncHello" component={AsyncHello} title="AsyncHello" />
    </Router>
  );
};

export default RouterComponent;
