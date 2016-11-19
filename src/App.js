import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import reducers from './reducers';
import Hello from './components/Hello';

class App extends Component {

  componentWillMount() {
    const firebaseConfig = {
      apiKey: '',
      authDomain: '',
      databaseURL: '',
      storageBucket: '',
      messagingSenderId: ''
    };

    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Hello />
      </Provider>
    );
  }
}

export default App;
