/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, ScrollView } from 'react-native';
import Header from './src/component/commons/Header';
import AlbumList from './src/component/album/AlbumList';

const App = () => (
  <ScrollView>
    <Header headerText='Albums!' />
    <AlbumList />
  </ScrollView>
);


export default App;
