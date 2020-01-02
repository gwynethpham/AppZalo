import React from 'react';
import {StyleSheet, View, Text ,TouchableOpacity, Platform, SafeAreaView ,ImageBackground } from 'react-native';
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import LoginComponent from './login';
import RegisterComponent from './register';

const Authentication = (props) => {
    const _handleLogin = () => {
        // console.log('props.navigation.navigate',props.navigation);
        props.navigation.navigate('login')
    };
    const _handleRegister = () => {

    };
    return(
        <SafeAreaView  style={styles.container}>
            <TouchableOpacity onPress={_handleLogin} background={Platform.OS === 'android' ? '' : ''}>
                <View style={styles.btnLogin}>
                    <Text> Đăng Nhập </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={_handleRegister} >
                <View style={styles.btnRegister}>
                    <Text> Đăng ký123 </Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
};

const Auth = createSwitchNavigator({
    login : LoginComponent,
    register : RegisterComponent,
    layout : Authentication
}, {
    initialRouteName : 'layout'
});
export default createAppContainer(Auth);



const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : 'column',
        backgroundColor : 'rgba(255, 0, 0, 0.2)',
        justifyContent : 'center',
        alignItems : 'center',
    },
    btnLogin  : {
        padding : 5,
        backgroundColor: '#f194ff',
        borderRadius : 15,
    },
    btnRegister : {
        marginTop: 3,
        padding : 5,
        backgroundColor : '#DCDCDC',
        borderColor: '#f194ff',
        borderWidth : 3,
        borderRadius: 15,
    }
});