/** @format */

import {AppRegistry, View} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList'
import React from 'react';

//import App from './App';
//import {name as appName} from './app.json';


const App = () => (
  <View style={{ flex:1 }}>
    <Header headerText={'Albums!'}/>
    <AlbumList />
  </View>
  
)
AppRegistry.registerComponent('Albums', () => App);
