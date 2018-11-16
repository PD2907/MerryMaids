import React, { Component } from "react";
import { Actions, Router, Scene } from "react-native-router-flux";

import splashScreen from './components/splashComponent/splashScreen';
import loginScreen from './components/signInComponent/signInScreen';
import forgotPassword from './components/signInComponent/forgotPasswordScreen'

const scenes = Actions.create(
    <Scene key="root">
      <Scene
        key="splashScreen"
        component={splashScreen}
        hideNavBar={true}
        initial
        direction="leftToRight"
      />

       <Scene
        key="loginScreen"
        component={loginScreen}
        hideNavBar={true}
        direction="leftToRight"
      />

       <Scene
        key="forgotPasswordScreen"
        component={forgotPassword}
        hideNavBar={true}
        direction="leftToRight"
      />
       </Scene>
);

// To see all the requests in the chrome Dev tools in the network tab.
XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
  GLOBAL.originalXMLHttpRequest :
  GLOBAL.XMLHttpRequest;

// fetch logger
global._fetch = fetch;
global.fetch = function (uri, options, ...args) {
  return global._fetch(uri, options, ...args).then((response) => {
    console.log('Fetch', { request: { uri, options, ...args }, response });
    return response;
  });
};

export default class Routes extends Component {
  render() {
    return (
      <Router
        scenes={scenes}
      />
    );
  }
}