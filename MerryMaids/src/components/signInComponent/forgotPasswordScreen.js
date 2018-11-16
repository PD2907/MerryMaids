import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Platform,
  Alert,
  TouchableOpacity
} from 'react-native';
import { UIActivityIndicator } from 'react-native-indicators';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Strings from "../../constants/strings";
import { connect } from 'react-redux';
import Colors from "../../constants/colors";
import commonStyles from '../../commonStyle/commonStyle'
import { userLogin } from '../../actions/actionCreators'
import { validateEmail, showErrorMessage } from '../../constants/commonFunctions';
import TextInputComponent from '../commonComponent/TextInputComponent'
import ButtonComponent from '../commonComponent/buttonComponent'
import HeaderScreen from '../commonComponent/headerScreen'
import { Icon } from "react-native-elements";
import IconIonicons from 'react-native-vector-icons/Ionicons'
import { StackActions } from 'react-navigation';

const window = Dimensions.get('window')
const popAction = StackActions.pop({
  n: 1,
});



export default class forgotPasswordScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      isLoading: ''
    };
  }

  onEmailChange(text){
    this.setState({email :  text})
  }

  resetPasswordClick() {
    if (this.state.email == '') {
      showErrorMessage(Strings.ERROR_EMPTY_EMAIL)
    } else if (!validateEmail(this.state.email)) {
      showErrorMessage(Strings.ERROR_INVALID_EMAIL)
    } else {
      alert('Sucess')

      // this.setState({ isLoading: true })
      // postData = {
      //   email: this.state.userName,
      //   password: this.state.password,
      //   deviceToken: 'ios',
      //   deviceType: Platform.OS,
      //   deviceId: '1214324'
      // };
      // this.props.userLogin(postData)
    }
  }


  render() {
    return (
      <ImageBackground style={forgotPassStyles.mainContainer}
        //source={require("../../assets/forgot.png")}
      >
        <ImageBackground style={forgotPassStyles.firstView}
          source={require("../../assets/bg.png")}>
          <TouchableOpacity
            hitSlop={{ top: 80, bottom: 80, left: 80, right: 80 }}
            style={{ flex: 0.1, alignItems: 'flex-end', marginTop: 45 }}
          //  onPress={() => this.props.navigation.navigate('loginScreen')}
            onPress={() => this.props.navigation.dispatch(popAction)}>

            <IconIonicons
              name="ios-arrow-round-back"
              color={Colors.WHITE}
              size={45}
            />
          </TouchableOpacity>
          <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={forgotPassStyles.textForgotPass}>{Strings.FORGOT}</Text>
            <Text style={forgotPassStyles.textForgotPass}> {Strings.PASSWORD}</Text>
          </View>
       
        </ImageBackground>

         <View style={forgotPassStyles.secondView}>
            <Text style={forgotPassStyles.textstyle}>{Strings.NEED_RGISTER_EMAIL_ID}</Text>

             <TextInputComponent
              style={[commonStyles.textInputStyle, {marginTop: 15}]}
              placeholder={Strings.EMAIL}
              onChangeText={this.onEmailChange.bind(this)}
              value={this.state.userName}
            />

              <View style={{marginTop:35}}/>
            
             <ButtonComponent
              txtvalue={Strings.RESET_PASS}
              onPress={() => this.resetPasswordClick()}
            />

         </View>

      </ImageBackground>
    )
  }
}

const forgotPassStyles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: Colors.WHITE },
  firstView: { flex: 0.3, flexDirection: 'row' },
  secondView: { flex: 0.7, alignItems:'center', justifyContent:'center'},
  textForgotPass: { fontSize: window.height / 18, color: Colors.WHITE , fontWeight:'600'},
  textstyle : {color: Colors.TEXT_COLOR, textAlign : 'left', marginLeft:10, marginRight:20 }
})




