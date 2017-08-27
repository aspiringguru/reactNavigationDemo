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
          onPress={() => navigate('Chat', { user: 'Lucy', postcode: 4000, color: 'red' })}
          title="Chat with Lucy"
        />
        <Button
          onPress={() => navigate('Chat', { user: 'Wendy', postcode: 2000, color: 'blue' })}
          title="Chat with Wendy"
        />
        <Button
          onPress={() => navigate('Chat', { user: 'Sam', postcode: 3000, color: 'green' })}
          title="Chat with Sam"
        />
      </View>
    )
  }/* end render */
}/* end class HomeScreen extends React.Component */



/*
*
*   NB navigate('Chat', { user: 'Lucy' })
*   extra params >  navigate('Chat', { user: 'Lucy', postcode: 4000 })
*   StackNavigator >   Chat: { screen: ChatScreen },
*   so we need to recover value for navigation.state.params.user
*/
class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
      title: `Chat with ${navigation.state.params.user}`,
  });

  render() {
    /* extract value for user from state.params */
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user}</Text>
        <Text>Postcode {params.postcode}</Text>
        <Text>Color {params.color}</Text>
      </View>
    );
  }
}/* end class ChatScreen extends React.Component */



const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
