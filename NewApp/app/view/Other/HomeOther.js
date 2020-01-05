import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import ToolBar from '../../containers/modules/ToolBar/index';

const HomeOther = (props) =>  {
  return (
    <SafeAreaView style={styles.container}>
      <ToolBar option='OTHER' props={props} />
      <View>
        <View>
          <Text>Home Other</Text>
        </View>  
      </View>
    </SafeAreaView>
  );
};

export default HomeOther

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
