import React from 'react';
import {StyleSheet , Dimensions} from 'react-native';

 const screenWidth = Math.round(Dimensions.get('window').width);
 const screenHeight = Math.round(Dimensions.get('window').width);

 const PageLogin = StyleSheet.create({
 	container : {
 		flex : 1
 	}
 });

 export {
 	screenWidth,
 	screenHeight,
 	PageLogin
 }