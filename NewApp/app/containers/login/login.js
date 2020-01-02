import React from 'react';
import {Container, Input , Form, Item, Header, Content, Button ,Text} from 'native-base';

const LoginComponent = () => {
    return(
        <Container>
            <Header />
            <Content>
                <Form>
                    <Item>
                        <Input placeholder="Username" />
                    </Item>
                    <Item last>
                        <Input placeholder="Password" />
                    </Item>
                </Form>
                <Button block success>
                    <Text>Success</Text>
                </Button>
            </Content>
        </Container>
    )
};
export default LoginComponent;