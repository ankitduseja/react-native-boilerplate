import {
  DEFAULT_ACTION,
} from './constants';
import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  init: false,
});


function homeReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state.set('init',true);
      break;
    default:
      return state;
  }
}

export default homeReducer;
