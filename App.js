
import React from 'react';
import Navigation from './Navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers/index';
import rootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga);


console.log(store.getState())

export default function App() {

  return (
    <Provider store={store}>
            <Navigation/>
    </Provider>

  );
}

