import React, { Fragment } from 'react';
import styled from 'styled-components/native';
import { View, TouchableOpacity, Image } from 'react-native';

const addMessaageIcon = require('../../../../assets/add_chat.png');
const plusIcon = require('../../../../assets/plus.png');
const searchIcon = require('../../../../assets/search.png');
const addFriendIcon = require('../../../../assets/add_friend.png');
const albumIcon = require('../../../../assets/add_album.png');
const bellIcon = require('../../../../assets/bell.png');
const qrcodeIcon = require('../../../../assets/qrcode.png');
const settingIcon = require('../../../../assets/setting.png');

const Toolbar = (toolbar) =>  { 
    function _renderIconButton(icon1, action1, icon2, action2) {
        return (
            <Fragment>
                { icon1 &&
                    <TouchableOpacity onPress={() => {action1}}>
                        <Image style={{ width: 25, height: 25 }} source={icon1} />
                    </TouchableOpacity>
                }
                { icon1 && icon2 ? <View style={{ paddingLeft: 10 }} /> : null }
                { icon2 &&
                    <TouchableOpacity onPress={() => {action2}}>
                        <Image style={{ width: 25, height: 25 }} source={icon2} />
                    </TouchableOpacity>
                }
            </Fragment>
        )
    }

    function _renderRightView(toolbar) {
        switch (toolbar.option) {
            case 'MESSAGE' : 
                return _renderIconButton(addMessaageIcon, toolbar.props.navigation.navigate(''), plusIcon, toolbar.props.navigation.navigate(''));
            case 'DIRECTORY' : 
                return _renderIconButton(null, null, addFriendIcon, toolbar.props.navigation.navigate(''));
            case 'GROUP' : 
                return _renderIconButton(addMessaageIcon, toolbar.props.navigation.navigate(''), plusIcon, toolbar.props.navigation.navigate(''));
            case 'TIMELINE' : 
                return _renderIconButton(albumIcon, toolbar.props.navigation.navigate(''), bellIcon, toolbar.props.navigation.navigate(''));
            case 'OTHER' : 
                return _renderIconButton(qrcodeIcon, toolbar.props.navigation.navigate(''), settingIcon, toolbar.props.navigation.navigate(''));
            default : console.log('default')
                break;
        }
        
    } 


    return (
        <ToolBarView>
            <LeftView>
                <TouchableOpacity onPress={() => {}}>
                    <Image style={{ width: 25, height: 25 }} source={searchIcon} />    
                </TouchableOpacity>
            </LeftView>
            <CenterView>
                <Text>Tìm bạn bè, tin nhắn ...</Text>
            </CenterView>
            <RightView style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', paddingRight: 10 }}>
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
  