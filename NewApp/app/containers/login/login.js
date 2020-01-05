import React, {useState , useEffect} from 'react';
import {KeyboardAvoidingView, StyleSheet, View, Text, Dimensions,
    Image, TextInput, SafeAreaView, TouchableOpacity} from 'react-native';
import {screenWidth, screenHeight} from "../../styles";
// import { LoginButton } from 'react-native-fbsdk';

const LoginComponent = (props) => {
    LoginComponent.navigationOptions = {title : 'Login'};
    const [firstName, setFirstName] =useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mode, setMode] = useState();
    useEffect(() => {
        if(props.navigation) {
            setMode(props.navigation.state.routeName);
        }
    },[props.navigation]);

    const _handleLogin = () => {
        alert('Submit Login')
    };
    return(
        <SafeAreaView style={styles.containers}>
            <View style={styles.header}>
                <View style={{maxWidth : 150}}>
                    <Text style={styles.headerTitle}> Already have an account? </Text>
                </View>
                <View style={styles.viewImage}>
                    <Image style={styles.imageLogo} source={require('../../images/image-feature-login.jpg')} />
                </View>

            </View>
            <KeyboardAvoidingView style={[styles.body, mode === 'login' ? {flex : 5} : {flex : 7}]} behavior={'padding'} enable>
                <View style={styles.viewForm} >
                    {mode !=='login' &&<View>
                            <Text style={styles.textEmail}>First name</Text>
                            <View>
                                <TextInput style={styles.inputEmail} value={firstName} onChangeText={e => setFirstName(e)}
                                           placeholder="Enter email" placeholderTextColor="#B5B5B5"/>
                            </View>
                            <Text style={styles.textEmail}>Last name</Text>
                            <View>
                                <TextInput style={styles.inputEmail} value={lastName} onChangeText={e => setLastName(e)}
                                           placeholder="Enter email" placeholderTextColor="#B5B5B5"/>
                            </View>
                        </View> }
                    <Text style={styles.textEmail}>Email</Text>
                    <View>
                        <TextInput style={styles.inputEmail} value={email} onChangeText={e => setEmail(e)}
                                   placeholder="Enter email" placeholderTextColor="#B5B5B5"/>
                    </View>
                    <Text style={styles.textPassword}>Password</Text>
                    <View>
                        <TextInput secureTextEntry={true}
                                   style={styles.inputPassword}
                                   value={password} onChangeText={e => setPassword(e)} placeholder="Enter password"
                                   placeholderTextColor="#B5B5B5"/>
                    </View>
                </View>
                <View style={styles.viewSubmit}>
                    <TouchableOpacity  style={styles.touchSubmit} title={''} onPress={_handleLogin} >
                        <Text style={{color : '#ffffff' ,fontWeight : 'bold'}}> {mode ==='login' ? "Login" : 'Register'}</Text>
                    </TouchableOpacity>
                </View>
                {mode === 'login' &&<View style={styles.viewNewUser}>
                        <Text style={{fontWeight : 'bold'}}>New User?</Text><TouchableOpacity onPress={()=>props.navigation.navigate('register')}><Text style={{fontWeight : 'bold' ,color : '#11cfc5'}}>Register Now</Text></TouchableOpacity>
                    </View>
                }
            </KeyboardAvoidingView>
            <View style={[styles.footer,  mode === 'login' ? {flex : 3} : {flex : 2}]}>
                <View style={{ marginTop : 20,flexDirection : 'row', display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
                    <Text style={{color : '#fff',height : 1, width : 70 ,borderColor: "white", borderWidth: 1}}/>
                    <Text style={{color : '#fff',paddingLeft: 10, paddingRight: 10, fontWeight : 'bold'}}> User order Methods! </Text>
                    <Text style={{color : '#fff', height : 1, width : 70 ,borderColor: "white", borderWidth: 1}}/>
                </View>
                {/*<View>*/}
                {/*    <LoginButton*/}
                {/*        publishPermissions={["email"]}*/}
                {/*        onLoginFinished={*/}
                {/*            (error, result) => {*/}
                {/*                if (error) {*/}
                {/*                    alert("Login failed with error: " + error.message);*/}
                {/*                } else if (result.isCancelled) {*/}
                {/*                    alert("Login was cancelled");*/}
                {/*                } else {*/}
                {/*                    alert("Login was successful with permissions: " + result.grantedPermissions)*/}
                {/*                }*/}
                {/*            }*/}
                {/*        }*/}
                {/*        onLogoutFinished={() => alert("User logged out")}/>*/}
                {/*</View>*/}

            </View>
        </SafeAreaView>
    )
};
export default LoginComponent;

const styles = StyleSheet.create({
    containers : { flex : 1, backgroundColor : '#11cfc5',color : '#fff' },
    textLabel : { color : '#fff',fontWeight : 'bold' },
    viewForm : {paddingLeft : 30, paddingRight: 30},
    textEmail : {fontWeight :'bold', paddingTop : 25},
    inputEmail : {borderBottomColor : '#11cfc5', borderBottomWidth : 1},
    textPassword : {fontWeight : 'bold', paddingTop : 15},
    inputPassword : {borderBottomColor : '#11cfc5', borderBottomWidth : 1},
    viewSubmit : {display : 'flex', justifyContent: 'center', alignItems: 'center', paddingTop : 20},
    touchSubmit : {borderColor : '#11cfc5', backgroundColor : '#11cfc5', color : '#11cfc5',padding : 5, borderWidth : 1, borderRadius : 20, width : 200, display: 'flex', justifyContent:'center', alignItems: 'center'},
    viewNewUser : {paddingTop : 10,flexDirection: 'row', display : 'flex', justifyContent : 'center'},
    viewImage : { position : 'absolute', right : 30, backgroundColor : '#fff' ,width : 200, height : 200, display: 'flex',
        alignContent: 'center', justifyContent: 'center', alignItems : 'center',borderBottomEndRadius : 80, borderTopLeftRadius: 80 ,
        borderBottomLeftRadius : 20, borderTopRightRadius : 20},
    imageLogo: {width : 100, height : 100, borderRadius : 20},
    headerTitle : { fontSize : 30, color : '#ffff' },
    header : {  flex : 4, display : 'flex', alignContent : 'flex-start', alignItems : 'center',
        justifyContent : 'flex-start', flexDirection : 'row', paddingLeft : 30, width : screenWidth - 20 },
    body : { backgroundColor : '#fff', marginRight : 10, marginLeft : 10, borderRadius : 10 ,},
    footer : { }
});