import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';

const HomeGroup = () =>  {
  return (
    <SafeAreaView style={styles.container}>
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
