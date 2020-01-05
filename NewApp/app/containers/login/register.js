import React, {useState} from 'react';
import {Container, Input , Form, Item, Header,
    Content, Button , Label, Text, Left, Body, Right, Icon ,Title} from 'native-base';
import {KeyboardAvoidingView, StyleSheet} from 'react-native';
const RegisterComponent = (props) => {
    RegisterComponent.navigationOptions = {title : 'Login'};
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = () => {
        console.log('name', {name, password});
        setTimeout(() => {
            setName('');
            setPassword('');
        },500)
    }
    return(
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => props.navigation.navigate('layout')} title={null}>
                            <Icon name={'arrow-back'} />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Register</Title>
                    </Body>
                    {/*<Right>*/}
                    {/*    <Button transparent onPress={()=> null} title={null}>*/}
                    {/*        <Icon name='menu' />*/}
                    {/*    </Button>*/}
                    {/*</Right>*/}
                </Header>
                <Content>
                    <KeyboardAvoidingView style={styles.containers} behavior="padding" enabled>
                        <Form>
                            <Item floatingLabel>
                                <Label>first name</Label>
                                <Input onChangeText={e => setName(e)} value={name}/>
                            </Item>

                            <Item floatingLabel>
                                <Label>last name</Label>
                                <Input onChangeText={e => setLastName(e)} value={lastName}/>
                            </Item>
                            <Item floatingLabel>
                                <Label> email </Label>
                                <Input onChangeText={e => setEmail(e)} value={email}/>
                            </Item>

                            <Item floatingLabel last>
                                <Label>Password</Label>
                                <Input onChangeText={e => setPassword(e)} value={password}/>
                            </Item>
                        </Form>
                        <Button block success onPress={handleSubmit} title={null}>
                            <Text>Success</Text>
                        </Button>
                    </KeyboardAvoidingView>
                </Content>
            </Container>

    )
};
export default RegisterComponent;

const styles = StyleSheet.create({
    containers : {
        flex : 1
    }
});