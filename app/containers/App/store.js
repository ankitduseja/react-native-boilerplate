import { createStore, combineReducers } from 'redux';
import homeReducer from '../HomePage/reducer';
import counterReducer from '../CounterRedux/reducer';
import { fromJS } from 'immutable';

import globalReducer from './reducer';
import devToolsEnhancer from 'remote-redux-devtools';

let store = createStore(combineReducers({homeReducer,globalReducer,counterReducer}), devToolsEnhancer());

export default store;
