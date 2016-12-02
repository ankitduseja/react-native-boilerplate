import { createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import { AsyncStorage } from 'react-native';
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

const persistEnhancer = autoRehydrate();

// Normal way to compose multiple middlewares, compose needs to be imported from redux
// const enhancers = compose(applyMiddleware(...middlewares), anotherEnhancer)

const enhancers = composeWithDevTools(applyMiddleware(...middlewares), persistEnhancer)
let store = createStore(reducers,{},enhancers);
persistStore(store,{
  storage: AsyncStorage, transforms: [
    immutableTransform({
      blacklist: ['globalReducer'] //blacklist non-immutable reducers
    })
  ]
}) //use .purge(); here if you want to delete the persisted value of store


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
