import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import * as actions from './actions';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Alert,
  Button,
  TouchableHighlight
} from 'react-native';
import Counter from '../../components/Counter';
// function mapStateToProps(state) { return {} }
// function mapDispatchToProps(dispatch) { return bindActionCreators(actions,dispatch); }


class CounterPage extends Component {
  render() {
    return <View style={styles.container}>
      <TouchableHighlight>
        <Text style={styles.welcome}>Counter Page</Text>
      </TouchableHighlight>
      <Counter name='1' />
      <Counter name='2' />
      <Counter name='3' />
    </View>;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginBottom: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 75,
  },
});

export default CounterPage;// connect(mapStateToProps,mapDispatchToProps)(Counter);
