/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native'
import {ShoppingPage} from './pages'
import {Provider} from 'react-redux'
import store from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <ShoppingPage/>
    </Provider>
  );
};

export default App;
