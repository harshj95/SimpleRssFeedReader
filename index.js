import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import FeedList from './src/components/FeedList';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Simple RSS Feed Reader'}/>
    <FeedList/>
  </View>
);

AppRegistry.registerComponent('RssFeedApp', () => App);
