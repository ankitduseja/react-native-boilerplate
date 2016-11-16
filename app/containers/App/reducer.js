import { combineReducers } from 'redux';

import globalReducer from './globalReducer';
import homeReducer from '../HomePage/reducer';
import counterReducer from '../CounterRedux/reducer';

const reducers = combineReducers({homeReducer,globalReducer,counterReducer});

export default reducers;
