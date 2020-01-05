import React from 'react';
import { Dimensions, StyleSheet, View, Text ,
    TouchableOpacity, Platform, SafeAreaView ,ImageBackground ,Image } from 'react-native';
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import LoginComponent from './login';
import {screenWidth, screenHeight} from '../../styles'


const Authentication = (props) => {
    const _handleLogin = () => {
        props.navigation.navigate('login')
    };
    const _handleRegister = () => {
        props.navigation.navigate('register')
    };
    return(
        <SafeAreaView  style={styles.container}>
            <ImageBackground resizeMode='stretch' source={require('../../images/background-login.png')}
            style={[{width: screenWidth, height : screenHeight , bacgroundSize : 'cover'}, styles.container]}>
                <TouchableOpacity onPress={_handleLogin} background={Platform.OS === 'android' ? '' : ''}>
                    <View style={styles.btnLogin}>
                        <Text> Đăng Nhập </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={_handleRegister} >
                    <View style={styles.btnRegister}>
                        <Text> Đăng ký </Text>
                    </View>
                </TouchableOpacity>
            </ImageBackground>
        </SafeAreaView>
    )
};

const Auth = createSwitchNavigator({
    login : LoginComponent,
    register : LoginComponent,
    layout : Authentication
}, {
    initialRouteName : 'layout'
});
export default createAppContainer(Auth);



const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
    },
    btnLogin  : {
        padding : 10,
        backgroundColor: '#fff',
        borderRadius : 15,
        width : screenWidth - 30,
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: '#fff',
        shadowOpacity: 1.0,
        // boxShadow: '0px 9px 10px 10px rgba(255,255,255,0.2)'
    },
    btnRegister : {
        marginTop : 20,
        padding : 10,
        backgroundColor: '#fff',
        borderRadius : 15,
        width : screenWidth - 30,
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
    }
});