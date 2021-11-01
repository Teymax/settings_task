import React from 'react';
import { Provider } from 'react-redux';

import { store } from './init/store';

import { Settings } from './components/Settings'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'

export const App = () => {
    return (
      <Provider store = {store}>
        <Settings />
      </Provider>
    );
};