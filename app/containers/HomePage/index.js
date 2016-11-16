import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions as RouteActions } from 'react-native-router-flux';
import * as actions from './actions';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View,
  TouchableHighlight
} from 'react-native';

function mapStateToProps(state) { return {} }
function mapDispatchToProps(dispatch) { return bindActionCreators(actions,dispatch); }

class HomePage extends Component {
  render() {
    console.log('Running The HomePage');
    return <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to HomePage</Text>
        <Button style={styles.pageButton} title="Welcome Page" onPress={RouteActions.about} accessibilityLabel="Go to About Page"/>
        <Button style={styles.pageButton} title="Counters" onPress={RouteActions.counter} accessibilityLabel="Go to Counters Page"/>
        <Button style={styles.pageButton} title="Counter Redux" onPress={RouteActions.counterredux} accessibilityLabel="Go to Counter with Redux Page"/>
    </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
    justifyContent: 'space-around',
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
  pageButton: {
    height: 25,
    borderWidth: 1,
    borderColor: '#000',
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
