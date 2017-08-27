/**
*
*   https://reactnavigation.org/docs/navigators/stack
*
*
 */

import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
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
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat')}
          title="Chat with Lucy"
        />
        <Text>---------------</Text>
        <Button
          onPress={() => navigate('Chat2')}
          title="Chat with Wendy"
        />
      </View>
    )
  }/* end render */
}/* end class HomeScreen extends React.Component */


/*
*     2nd screen added for demo purposes.
**    todo : move this to an external file and import
*/
class HomeScreen2 extends React.Component {
  static navigationOptions = {
    title: 'WelcomeTwo',
  };
  render() {
    return <Text>Hello, Navigation Two!</Text>;
  }
}/* end class HomeScreen2 extends React.Component */

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }
}/* end class ChatScreen extends React.Component */

class ChatScreen2 extends React.Component {
  static navigationOptions = {
    title: 'Chat with Wendy',
  };
  render() {
    return (
      <View>
        <Text>Chat with Wendy</Text>
      </View>
    );
  }
}/* end class ChatScreen2 extends React.Component */


const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
  Chat2: { screen: ChatScreen2 },
});

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
