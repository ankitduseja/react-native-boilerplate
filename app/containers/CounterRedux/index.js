import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Alert,
  Button,
  TouchableHighlight
} from 'react-native';
import CounterStateless from '../../components/CounterStateless';
import { counterSelector } from './selectors';

function mapStateToProps(state) {
  return {counters:counterSelector(state)};
}
function mapDispatchToProps(dispatch) { return bindActionCreators(actionCreators,dispatch); }

class CounterReduxPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let { dispatch } = this.props;
    dispatch(actionCreators.counterInit());
  }
  render() {
    console.log('Props',this.props);
    console.log('State',this.state);
    let counters=this.props.counters,countersArr=[];
    for (var i = 0; i < counters.length; i++) {
      countersArr.push(<CounterStateless key={'counter'+i} count={counters[i]} id={i} onIncrement={this.props.counterIncrement} onDecrement={this.props.counterDecrement} />);
    }
    return <View style={styles.container}>
      <TouchableHighlight>
        <Text style={styles.welcome}>Counter Redux Page</Text>
      </TouchableHighlight>
      {countersArr}
      <Button onPress={this.props.counterAdd} title='Add Counter' />
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

export default connect(mapStateToProps,mapDispatchToProps)(CounterReduxPage);
