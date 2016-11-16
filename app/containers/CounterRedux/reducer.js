import * as C from './constants';
import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  counters: [],
});


function counterReducer(state = initialState, action) {
  var s=state;
  switch (action.type) {
    case C.COUNTER_INIT:
      // Initializes counter as empty array
      counters=[];
      break;
    case C.COUNTER_ADD:
      s=s.updateIn(['counters'], list => list.push(0));
      break;
    case C.COUNTER_REMOVE:
      break;
    case C.COUNTER_INCREMENT:
      s=s.updateIn(['counters',action.id], value => value + 1);
      break;
    case C.COUNTER_DECREMENT:
      s=s.updateIn(['counters',action.id], value => value - 1);
      break;
    default:
  }
  // s=s.set('counters',counters)
  return s;
}

export default counterReducer;
