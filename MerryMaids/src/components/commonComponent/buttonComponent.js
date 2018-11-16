import React, { Component } from "react";
import { View, TouchableOpacity , Text} from "react-native";
//import TextInput from "react-native-material-textinput";
import Dimensions from "Dimensions";
import Colors from "../../constants/colors";
import commonStyles from '../../commonStyle/commonStyle'
import Strings from "../../constants/strings";

export default class buttonComponent extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity
                    style={commonStyles.touchableButtonStyle}
                    onPress={this.props.onPress}>
                    <Text style={{ color: Colors.WHITE }}>
            
                        {this.props.txtvalue}
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
}