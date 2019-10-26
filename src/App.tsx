import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/rootReducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import { Routes } from './containers/Routes';
import 'antd/dist/antd.css'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)  
);

sagaMiddleware.run(rootSaga);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
