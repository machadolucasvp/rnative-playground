import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'purple',
  },
  text: {
    fontSize: 24,
  },
});

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile} />
      <Text style={styles.text}>Lucas Machado</Text>
    </View>
  );
};

export default Header;
