import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import { createStoreHook } from 'react-redux';
import { combineReducers, legacy_createStore as createStore } from 'redux'
import reducer from './redux/UserReducer';
import { Provider } from 'react-redux';
import productReducer from './redux/ProductReducer'

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(combineReducers({reducer, productReducer}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);


