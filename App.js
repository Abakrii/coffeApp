/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Provider } from "react-redux";
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import store from './src/Store/configureStore';
import AppContainer from './src/Navigator';


const App = () => {
  return (
    <Provider store={store}>
    
      
     
    
        <AppContainer/>
       
      
   
    </Provider>
  );
};


export default App;
