import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';

const HomeTimeLine = () =>  {
  return (
    <SafeAreaView style={styles.container}>
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
