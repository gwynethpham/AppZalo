import React, {useEffect}from 'react';
import {View, Text, ActivityIndicator, StyleSheet, StatusBar, AsyncStorage} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const LoadingScreen = (props) => {
    const dispatch = useDispatch();
    const {user,user : {login}} = useSelector(state => state);
    useEffect(() => {
        setTimeout(()=> {
            _bootstrapAsync();
        },200)
    },[]);
    const _bootstrapAsync = async() => {
        const userToken = await AsyncStorage.getItem('token');
        console.log('userToken',userToken)
        if(userToken){
            props.navigation.navigate('HomeMessage')
        }else{
            props.navigation.navigate('layout')
        }
    };
    return(
        <View style={styles.classCenter}>
            <ActivityIndicator size={'large'} color={'#0000ff'}/>
            <StatusBar barStyle="default" />
        </View>
    )
};
const styles = StyleSheet.create({
    classCenter: {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
});
export default LoadingScreen;