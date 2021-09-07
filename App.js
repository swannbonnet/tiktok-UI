/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Navigation from './src/components/navigation/Navigation';


const App = () => {
  

  return (
    <>
    <StatusBar barStyle="light-content" />
    <SafeAreaView style={{flex:1, backgroundColor:'#111111'}}>
      <Navigation />
    </SafeAreaView>

    </>
  );
};



export default App;
