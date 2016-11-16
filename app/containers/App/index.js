import React, { Component } from 'react';
import store from './store';
// import HomePage from '../HomePage';
// import {
//   AppRegistry,
//   Text,
//   View,
//   TouchableHighlight
// } from 'react-native';

import {Scene, Router, Actions} from 'react-native-router-flux';

import { Provider, connect } from 'react-redux';

import HomePage from '../HomePage/index';
import About from '../About';
import Counter from '../Counter';
import CounterRedux from '../CounterRedux';
const RouterWithRedux = connect()(Router);
const scenes = Actions.create(
  <Scene key="root">
    <Scene key="about" component={About} title="About"/>
    <Scene key="counter" component={Counter} title="Counter"/>
    <Scene key="counterredux" component={CounterRedux} title="Counter with Redux"/>
    <Scene key="home" component={HomePage} title="Home" initial={true}/>
  </Scene>
);

export default class App extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux scenes={scenes} />
      </Provider>
    );
  }
}
// AppRegistry.registerComponent('App', () => App);
