import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  View,
  StatusBar
} from 'react-native';
import { StackActions } from 'react-navigation';

const pushAction = StackActions.push({
  routeName: 'loginScreen',
  params: {
    myUserId: 9,
  },
});

class SplashScreen extends Component {
  constructor() {
    super();
  }

  getTimerCountDown() {
    setTimeout(() => {
       // Actions.loginScreen();
       this.props.navigation.dispatch(pushAction)
    }, 2500);
  }

  getTimeRem() {
    return this.state.timeRemaining;
  }

  componentDidMount() {
    this.getTimerCountDown();
  }

  render() {
    return (

      <View style={styles.container}>
        <View>
          <StatusBar backgroundColor="#3EC0F8" barStyle="light-content" />
        </View>
        <Image
          style={styles.container}
          source={require("../../assets/splash.png")}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    alignItems: 'center',
    position: 'relative',
  }
});


export default SplashScreen;



