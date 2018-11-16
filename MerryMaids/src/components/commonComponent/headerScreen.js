import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

import { Header } from "react-native-elements";
import Colors from "../../constants/colors";
import Strings from "../../constants/strings";
import { Actions } from "react-native-router-flux";
import { Icon } from "react-native-elements";
import {
    ifIphoneX,
    getStatusBarHeight
} from "react-native-iphone-x-helper";
import { StackActions } from 'react-navigation';

const popAction = StackActions.pop({
    n: 1,
  });
  
class headerScreen extends Component {
    constructor() {
        super();
    }

    onBack(){
    console.log('===OnBack=====')
    //this.props.navigation.dispatch(StackActions.popToTop())
    this.props.navigation.navigate('splashScreen')
    }
    renderLeftOne(screenName) {
        switch (screenName) {
            case Strings.LOGIN:
                return <TouchableOpacity
                    hitSlop={{ top: 80, bottom: 80, left: 80, right: 80 }} 
                    onPress={() =>  this.onBack()}>
                    <Icon
                        name="ios-arrow-back"
                        type='ionicon'
                        color={Colors.WHITE}
                    />
                </TouchableOpacity>;

            default:
                return null
        }
    }

    renderCenterOne(screenName) {
        switch (screenName) {
            case Strings.LOGIN:
                return <View>
                    <Text style={styles.titleTextStyle}>{screenName}</Text>
                </View>;
        }
    }

    renderRightOne(screenName) {
        switch (screenName) {
            case Strings.LOGIN:
                return <TouchableOpacity
                    onPress={() => Actions.profileEditScreen({ profileData: this.props.profileData })}>
                    <Icon
                        name="edit"
                        type='feather'
                        color={Colors.WHITE}
                        size={20}
                    />
                </TouchableOpacity>;
        }
    }

    render() {
        return (
            <View style={styles.header}>
                <Header
                    // backgroundColor={Colors.WHITE}
                    leftComponent={this.renderLeftOne(this.props.title)}
                    centerComponent={this.renderCenterOne(this.props.title)}
                    rightComponent={this.renderRightOne(this.props.title)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 5
    },
    field: {
        color: '#d9d9d9',
        flex: 2,
        fontSize: 13,
        fontWeight: '500',
        padding: 3,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#d9d9d9',
        height: 40,
        marginVertical: 5
    },
    button: {
        flex: 2,
        padding: 3,
        borderRadius: 3,
        borderWidth: 1,
        backgroundColor: '#d9d9d9',
        height: 40,
        marginVertical: 10
    },
    buttonLabel: {
        color: '#ffffff',
        fontSize: 13,
        fontWeight: '500'
    },
    titleTextStyle: {
        color: Colors.WHITE,
        fontSize: 15,
        fontWeight: 'bold',
        padding: 20
    },
    header: {
        ...ifIphoneX({
            paddingTop: getStatusBarHeight()
        }, {
                paddingTop: 0
            })
    }
});

export default headerScreen;

