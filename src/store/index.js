import { createStore, applyMiddleware } from 'redux';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';

import sagas from './sagas';
import reducers from './ducks';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const persistConfig = {
  key: '@GoCommerce:Cart',
  storage,
  whitelist: 'cart',
};
const persistedReducers = persistReducer(persistConfig, reducers);
const middleware = [sagaMiddleware];
const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;
const store = createAppropriateStore(persistedReducers, applyMiddleware(...middleware));
const persistor = persistStore(store);
sagaMiddleware.run(sagas);

export { store, persistor };
