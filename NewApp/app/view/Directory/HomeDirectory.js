import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import ToolBar from '../../containers/modules/ToolBar/index';

const HomeDirectory = (props) =>  {
  return (
    <SafeAreaView style={styles.container}>
      <ToolBar option='DIRECTORY' props={props} />
      <View>
        <View>
          <Text>Home Directory</Text>
        </View>  
      </View>
    </SafeAreaView>
  );
};

export default HomeDirectory

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
