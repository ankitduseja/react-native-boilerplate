import { createStore, applyMiddleware } from 'redux';
import { fromJS } from 'immutable';

// import devToolsEnhancer from 'remote-redux-devtools';
import { composeWithDevTools } from 'remote-redux-devtools';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducer';
import appSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware,
];

const enhancers = composeWithDevTools(applyMiddleware(...middlewares))
let store = createStore(reducers,{},enhancers);


// Extensions
store.runSaga = sagaMiddleware.run(appSagas);
store.asyncReducers = {};

// Make reducers hot reloadable, see http://mxs.is/googmo
/* istanbul ignore next */
// if (module.hot) {
//   module.hot.accept('./reducers', () => {
//     System.import('./reducers').then((reducerModule) => {
//       const createReducers = reducerModule.default;
//       const nextReducers = createReducers(store.asyncReducers);
//       store.replaceReducer(nextReducers);
//     });
//   });
// }

export default store;
