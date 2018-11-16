/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//react-native init --version 0.55.3 MerryMaids
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
//import Routes from './Routes';
import Routes from './ReactNavigations';
console.disableYellowBox = true; //Disables the warning in production
const store = configureStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes/>
      </Provider>
    );
  }
}