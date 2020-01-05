import React, {useEffect} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, AsyncStorage, StatusBar, Button} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Auth from './containers/login';

import HomeMessageScreen from './view/message/HomeMessage';
import HomeDirectoryScreen from './view/Directory/HomeDirectory';
import HomeGroupScreen from './view/Group/HomeGroup';
import HomeTimeLineScreen from './view/TimeLine/HomeTimeLine';
import HomeOtherScreen from './view/Other/HomeOther';

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

const MessageScreen = createStackNavigator({
    HomeMessage: {
        screen: HomeMessageScreen,
        navigationOptions: {
            header: null
        }
    }
});

const DirectoryScreen = createStackNavigator({
    HomeMessage: {
        screen: HomeDirectoryScreen,
        navigationOptions: {
            header: null
        }
    }
});

const GroupScreen = createStackNavigator({
    HomeMessage: {
        screen: HomeGroupScreen,
        navigationOptions: {
            header: null
        }
    }
});

const TimeLineScreen = createStackNavigator({
    HomeMessage: {
        screen: HomeTimeLineScreen,
        navigationOptions: {
            header: null
        }
    }
});

const OtherScreen = createStackNavigator({
    HomeMessage: {
        screen: HomeOtherScreen,
        navigationOptions: {
            header: null
        }
    }
});

const AppZalo = createBottomTabNavigator(
    {
        "Tin nhắn": MessageScreen,
        "Danh bạ": DirectoryScreen,
        "Nhóm": GroupScreen,
        'Nhật ký': TimeLineScreen,
        "Thêm": OtherScreen,
    },
    {
        headerMode: 'none',
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                switch (routeName) {
                    case "Dash Board":
                        iconName = <IconFontAwesome name='home' size={25} color={tintColor} />;
                        break;
                    case "Wallet":
                        iconName = <IconSimpleLineIcons name='wallet' size={25} color={tintColor} />;
                        break;
                    case "Transaction":
                        iconName = <IconFontAwesome name='exchange' size={25} color={tintColor} />;
                        break;
                    case "Security":
                        iconName = <IconMaterialIcons name='security' size={25} color={tintColor} />;
                        break;
                    case "Mining":
                        iconName = <IconMaterialCommunityIcons name='coin' size={25} color={tintColor} />;
                        break;
                }
                return iconName;
            },
            tabBarVisible: true,
        }),
        tabBarOptions: {
            activeTintColor: '#AC0000',
            inactiveTintColor: 'gray',
        },
    }
);

const Root = createSwitchNavigator(
    {
        App : AppZalo,
        Loading : LoadingScreen,
        auth : Auth
    },
    {
        initialRouteName: 'App',
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