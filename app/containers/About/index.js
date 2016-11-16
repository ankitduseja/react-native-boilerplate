import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class About extends Component {
  render() {
    console.log('About Page');
    return <View style={styles.container}>
      <TouchableHighlight>
        <Text style={styles.welcome}>Welcome to About Page</Text>
      </TouchableHighlight>
      <Text style={styles.instructions}>This is a demo screen of the React All In One app.</Text>
    </View>;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
