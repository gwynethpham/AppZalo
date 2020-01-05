import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';

const HomeDirectory = () =>  {
  return (
    <SafeAreaView style={styles.container}>
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
