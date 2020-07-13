import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import urlReducer from '../reducers/url';
import rootSaga from '../sagas/root';

export const createStore = ({ preLoadedState }) => {
  const sagaMiddleware = createSagaMiddleware()
  const store = configureStore({
    reducer: {
      urls: urlReducer
    },
    middleware: [sagaMiddleware],
    preLoadedState
  });
  sagaMiddleware.run(rootSaga);
  return store;
};
