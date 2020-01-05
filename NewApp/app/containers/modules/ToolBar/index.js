import React, {Fragment} from 'react';
import styled from 'styled-components/native';
import { BackHandler,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconDesign from 'react-native-vector-icons/AntDesign'

const Toolbar = (toolbar) =>  { 
    function _renderIconButton(icon1, action1, icon2, action2) {
        return (
            <IconView>
                { icon1 &&
                    <IconButton onPress={() => action1}>
                        <Icon name={icon1} color='white' size={25}/>
                    </IconButton>
                }
                { icon2 &&
                    <IconButton onPress={() => action2}>
                        <Icon name={icon2} color='white' size={25}/>
                    </IconButton>
                }
            </IconView>
        )
    }

    function _renderRightView(toolbar) {
        switch (toolbar.option) {
            case 'MESSAGE' : 
                return _renderIconButton('message-plus', toolbar.props.navigation.navigate(''), 'add', toolbar.props.navigation.navigate(''));
            case 'DIRECTORY' : 
                return _renderIconButton('md-person-add', toolbar.props.navigation.navigate(''), null, null);
            case 'GROUP' : 
                return _renderIconButton('message-plus', toolbar.props.navigation.navigate(''), 'add', toolbar.props.navigation.navigate(''));
            case 'TIMELINE' : 
                return _renderIconButton('image-plus', toolbar.props.navigation.navigate(''), 'alarm-light-outline', toolbar.props.navigation.navigate(''));
            case 'OTHER' : 
                return _renderIconButton('qrcode', toolbar.props.navigation.navigate(''), 'settings', toolbar.props.navigation.navigate(''));
            default : console.log('default')
                break;
        }
        
    } 


    return (
        <ToolBarView>
            <LeftView>
                <IconDesign name='search1' size={20} color='white'/>
            </LeftView>
            <CenterView>
                <Text>Tìm bạn bè, tin nhắn ...</Text>
            </CenterView>
            <RightView>
                { _renderRightView(toolbar) }
            </RightView>
        </ToolBarView>
    );
};
  
const ToolBarView = styled.View`
    flex-direction: row;
    height: 40px;
    justify-content: center;
`;

const LeftView = styled.View`
    flex: 0.1;
    flex-direction: row;
    height: 40px;
    background-color: #228dff;
    justify-content: flex-end;
    align-items: center;
`;

const CenterView = styled.View`
    flex: 0.6;
    flex-direction: row;
    height: 40px;
    background-color: #228dff;
    justify-content: center;
    align-items:center;
`;

const RightView = styled.View`
    flex: 0.3;    
    flex-direction: row;
    height: 40px;
    background-color: #228dff;
    justify-content: center
    align-items:center;
`;

const IconView = styled.View`
    flexDirection: row;
    justify-content: center;
    align-items: center;
    margin: 5px;
`;

const Text = styled.Text`
    width: 100%;
    color: white;
    text-align: center;
    font-size: 18;
`;

const IconButton = styled.TouchableOpacity`
`;

export default Toolbar
  