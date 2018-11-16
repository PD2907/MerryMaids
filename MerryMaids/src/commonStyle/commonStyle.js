import {
    StyleSheet,
    Dimensions
  } from 'react-native';
  import Colors from '../constants/colors';
  const window = Dimensions.get('window');

  export default StyleSheet.create({
    textInputStyle:{
              height: window.height / 16,
              width: window.width / 1.2,
              borderColor: Colors.BORDER_COLOR, 
              borderWidth: 1,
              borderRadius: 20,
              paddingLeft: 10
            },
            touchableButtonStyle:{
            height: window.height / 16,
            width: window.width / 1.2,
            borderWidth: 1,
            borderRadius: 20,
            marginTop: window.height/8.5,
            borderColor:Colors.APP_COLOR,
            backgroundColor: Colors.APP_COLOR,
            alignItems:'center',
            justifyContent:'center'
          },
          activityIndicatorStyle: {
            flex: 1,
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Colors.TRANSPARENT,
            width: window.width,
            height: window.height
          },
    });