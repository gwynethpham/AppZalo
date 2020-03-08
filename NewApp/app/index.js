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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MessageScreen = createStackNavigator({
    HomeMessage: {
        screen: HomeMessageScreen,
        navigationOptions: {
            header: null
        }
    }
});

const DirectoryScreen = createStackNavigator({
    HomeDirectoryScreen: {
        screen: HomeDirectoryScreen,
        navigationOptions: {
            header: null
        }
    }
});

const GroupScreen = createStackNavigator({
    HomeGroupScreen: {
        screen: HomeGroupScreen,
        navigationOptions: {
            header: null
        }
    }
});

const TimeLineScreen = createStackNavigator({
    HomeTimeLineScreen: {
        screen: HomeTimeLineScreen,
        navigationOptions: {
            header: null
        }
    }
});

const OtherScreen = createStackNavigator({
    HomeOtherScreen: {
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
                    case "Tin nhắn":
                        iconName = <Icon name='message-text-outline' size={25} />;
                        break;
                    case "Danh bạ":
                        iconName = <Icon name='contacts' size={25}  />;
                        break;
                    case "Nhóm":
                        iconName = <Icon name='account-group' size={25}  />;
                        break;
                    case "Nhật ký":
                        iconName = <Icon name='clock' size={25}  />;
                        break;
                    case "Thêm":
                        iconName = <Icon name='apps' size={25}  />;
                        break;
                }
                return iconName;
            },
            tabBarVisible: true,
        }),
        tabBarOptions: {
            activeTintColor: '#AC0000',
            inactiveTintColor: 'gray',
            style: { padding: 10 }
        },
    }
);

const Root = createSwitchNavigator(
    {
        App : AppZalo,
        // Loading : LoadingScreen,
        auth : Auth
    },
    {
        initialRouteName: 'auth',
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