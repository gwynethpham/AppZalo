import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';

const HomeMessage = () =>  {
  return (
    <SafeAreaView style={styles.container}>
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
