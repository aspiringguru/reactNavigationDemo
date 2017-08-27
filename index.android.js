/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';

import { StackNavigator } from 'react-navigation';


/*
*   NB class HomeScreen extends React.Component
*   instead of
*   class HomeScreen extends Component
*   because
*   import React from 'react';
*   instead of
*   import React, { Component } from 'react';
*/
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return <Text>Hello, Navigation!</Text>;
  }
}/* end class HomeScreen extends React.Component */

class HomeScreen2 extends React.Component {
  static navigationOptions = {
    title: 'WelcomeTwo',
  };
  render() {
    return <Text>Hello, Navigation Two!</Text>;
  }
}/* end class HomeScreen2 extends React.Component */


const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen2 },
});

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
