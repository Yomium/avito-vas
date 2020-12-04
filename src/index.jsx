import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Preview from './components/Preview';
import BannerForm from './components/BannerForm';
import Buttons from './components/Buttons';
import reducers from './reducers/index';
import './css/styles.css';

const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
const devtoolMiddleware = ext && ext();

const store = createStore(
  reducers,
  devtoolMiddleware,
);

render(
  <Provider store={store}>
    <Preview />
    <BannerForm />
    <Buttons />
  </Provider>,
  document.getElementById('root'),
);
