import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import ToolBar from '../../containers/modules/ToolBar/index';

const HomeGroup = (props) =>  {
  return (
    <SafeAreaView style={styles.container}>
      <ToolBar option='GROUP' props={props} />
      <View>
        <View>
          <Text>Home Group</Text>
        </View>  
      </View>
    </SafeAreaView>
  );
};

export default HomeGroup

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
