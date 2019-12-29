import React, {useEffect} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, AsyncStorage, StatusBar, Button} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const LoadingScreen = (props) => {
    useEffect(() => {
        _bootstrapAsync()
    },[]);
    const _bootstrapAsync = () => {
        const userToken = AsyncStorage.getItem('token');
        console.log('userToken',userToken);
        if(userToken) {
            setTimeout(() => {
                props.navigation.navigate('App');
            }, 500)
        }
        else{
            props.navigation.navigate('Login', {fetchData : false, message : 'Login not success'});
        }
    };
    return(
        <View style={styles.classCenter}>
            <ActivityIndicator size={'large'} color={'#0000ff'}/>
            <StatusBar barStyle="default" />
        </View>
    )
};
const Login = (props) => {
    Login.navigationOptions = {title : 'Login'};
    const _signInAsync = async() => {
        await AsyncStorage.setItem('token', 'Pham Minh Tan');
        props.navigation.navigate('Loading');
    };
    return (
        <View  style={styles.classCenter}>
            <Button title="Sign in!" onPress={_signInAsync} />
        </View>
    );
};

const AppZalo = () => {
    // AppZalo.navigationOptions = screenProps => ({
    //     title: screenProps.navigation.getParam("...")
    // });
    AppZalo.navigationOptions = {
        title : 'Hello App Zalo',
    };
    return(
        <View style={{flex : 1, justifyContent: 'center', alignItems : 'center', backgroundColor: '#33ccff'}}>
            <Text> New App!</Text>
        </View>
    )
};

const Root = createSwitchNavigator(
    {
        App : AppZalo,
        Loading : LoadingScreen,
        Login : Login
    },
    {
        initialRouteName: 'Login',
    }
);
export default createAppContainer(Root);

const styles = StyleSheet.create({
    classCenter: {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
});