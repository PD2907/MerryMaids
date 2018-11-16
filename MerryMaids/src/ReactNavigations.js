import React, { Component } from "react";
import { createStackNavigator } from 'react-navigation';

import splashScreen from './components/splashComponent/splashScreen';
import loginScreen from './components/signInComponent/signInScreen';
import forgotPasswordScreen from './components/signInComponent/forgotPasswordScreen';

  const RootStack = createStackNavigator({
    //Login: LoginScreen,
    splashScreen : {
        screen: splashScreen,
        navigationOptions: {
          header: null
        }
      },
      
    loginScreen : {
      screen: loginScreen,
      navigationOptions: {
        header: null
      },
    },

    forgotPasswordScreen:{
      screen: forgotPasswordScreen,
       navigationOptions: {
        header: null
      },
    },
    
  }, {initialRouteName: 'splashScreen'})  //headerMode: 'screen' //Launching Screens

  export default class ReactNavigations extends Component {
    render() {
      return <RootStack />;
    }
  }
  