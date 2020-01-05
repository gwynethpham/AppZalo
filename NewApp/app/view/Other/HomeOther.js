import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';

const HomeOther = () =>  {
  return (
    <SafeAreaView style={styles.container}>
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
