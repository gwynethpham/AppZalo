import React, { Fragment } from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import ToolBar from '../../containers/modules/ToolBar/index';
import styled from 'styled-components';
import { List, ListItem } from 'react-native-elements';

const avatar1 = require('../../../assets/e_avatar1.png');
const avatar2 = require('../../../assets/e_avatar2.png');

const data = [
  {
    id: 1,
    name: 'William',
    avatar: null,
    lastMessage: 'Hola !!!!!! Hola !!!!!! Hola !!!!!! Hola !!!!!! Hola !!!!!!',
    type: 'user',
    email: 'william@gmail.com',
    lastTime: '3 h' 
  },
  {
    id: 2,
    name: 'Zalo App Group',
    avatar: null,
    lastMessage: '.......... !!!!!!',
    type: 'group',
    email: '',
    lastTime: '1 d' 
  },
  {
    id: 3,
    name: 'Tan Pham',
    avatar: null,
    lastMessage: 'Hello !!!!!!',
    type: 'user',
    email: 'tanpham@gmail.com',
    lastTime: '25 m' 
  },
  {
    id: 4,
    name: 'BTS',
    avatar: null,
    lastMessage: 'Hello !!!!!!',
    type: 'user',
    email: 'bts@gmail.com',
    lastTime: '24 h' 
  },
  {
    id: 5,
    name: 'Minh Ngo',
    avatar: null,
    lastMessage: 'Hello !!!!!!',
    type: 'user',
    email: 'minhngo@gmail.com',
    lastTime: '17 d' 
  },
  {
    id: 6,
    name: 'Dev',
    avatar: null,
    lastMessage: 'Hello !!!!!!',
    type: 'user',
    email: 'dev@gmail.com',
    lastTime: '25 m' 
  }
]

const Item = (name, email, lastMessage, lastTime) => {
  return (
    <TouchableOpacity onPress={() => {}} style={{ flex: 1, flexDirection: 'row', height: 60, marginTop: 10 }}>
      <View style={{ flex: 0.2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'  }}>
        <Image style={{ width: 54, height: 54, borderColor: 'gray', borderWidth: 0.5, borderRadius: 27 }} source={avatar1}  />
      </View>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingLeft: 15, borderBottomColor: '#d2d1d1', borderBottomWidth: 1 }}>
        <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'flex-start' }}>
          <Text style={{ fontSize: 16, fontWeight: '500' }}>{name} {email ? '(' + email + ')' : ''}</Text>
          <Text style={{ color: 'gray', fontSize: 14, fontWeight: '300', paddingTop: 5 }} numberOfLines={1}>{lastMessage}</Text>
        </View>
        <View style={{ flex: 0.2, justifyContent: 'flex-end', alignItems: 'center', paddingRight: 10 }}>
          <Text style={{ color: 'gray', fontSize: 14, fontWeight: '400' }} >{lastTime}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const HomeMessage = (props) =>  {
  return (
    <SafeAreaView style={styles.container}>
      <ToolBar option='MESSAGE' props={props} />
      <ListMessage>
          <FlatList
            data={data}
            renderItem={({item}) => Item(item.name, item.email, item.lastMessage, item.lastTime)}
          />
      </ListMessage>
    </SafeAreaView>
  );
};

export default HomeMessage

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const ListMessage = styled.View(`
  flexDirection: row;
  justifyContent: center;
  backgroundColor: white;
`);