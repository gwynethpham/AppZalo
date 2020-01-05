import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import ToolBar from '../../containers/modules/ToolBar/index';

const HomeTimeLine = (props) =>  {
  return (
    <SafeAreaView style={styles.container}>
      <ToolBar option='TIMELINE' props={props} />
      <View>
        <View>
          <Text>HomeTimeLine</Text>
        </View>  
      </View>
    </SafeAreaView>
  );
};

export default HomeTimeLine

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
