import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  Root  from './app/index';
import { Provider} from 'react-redux';
import store from './app/lib/createStore';

const App = () => {
  return (
    <Provider store={store} >
      <Root />
    </Provider>
  );
};
export default App;

