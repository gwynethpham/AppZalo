import React from 'react';
import {Container, Input , Form, Item, Header ,Content} from 'native-base';

const RegisterComponent = () => {
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
            </Content>
        </Container>
    )
};
export default RegisterComponent;