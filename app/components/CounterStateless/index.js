import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight
} from 'react-native';

class CounterStateless extends Component {
  constructor(props) {
    super(props);
  }
  onIncrement = () => {
    this.props.onIncrement(this.props.id);
  };
  onDecrement = () => {
    this.props.onDecrement(this.props.id);
  };
  render() {
    return <View style={styles.container}>
      <TouchableHighlight>
        <Text style={styles.welcome}>Counter {this.props.id}</Text>
      </TouchableHighlight>
      <View style={styles.counterBox}>
        <Button
          style={styles.counterButton}
          onPress={this.onIncrement}
          title="+"
          color="#0f0"
          accessibilityLabel="Increment"
        />
      <Text style={styles.counter}>{ this.props.count }</Text>
        <Button
          style={styles.counterButton}
          onPress={this.onDecrement}
          title="-"
          color="#f00"
          accessibilityLabel="Decrement"
        />
      </View>
    </View>;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginBottom: 2,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 5,
  },
  counterBox: {
    flexDirection: 'row',
  },
  counterButton: {
    width: 10,
    height: 10,
  },
  counter: {
    width: 50,
    textAlign: 'center',
    color: '#333333',
    fontSize: 25,
  },
});

export default CounterStateless;
