import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  Root  from './app/index';
import { Provider} from 'react-redux';
import store from './app/lib/createStore';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

const App = () => {
    async function fetchFont() {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
    }
    useEffect( () =>{
        fetchFont()
    }, []);
  return (
    <Provider store={store} >
      <Root />
    </Provider>
  );
};
export default App;

