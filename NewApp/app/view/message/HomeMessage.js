import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import ToolBar from '../../containers/modules/ToolBar/index';

const HomeMessage = (props) =>  {
  return (
    <SafeAreaView style={styles.container}>
      <ToolBar option='MESSAGE' props={props} />
      <View>
        <View>
          <Text>Home Message</Text>
        </View>  
      </View>
    </SafeAreaView>
  );
};

export default HomeMessage

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
