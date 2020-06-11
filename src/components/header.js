import React from 'react';
import {View, StyleSheet, Text, Animated} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    elevation: 5,
  },
  profile: {
    width: 64,
    height: 64,
    borderRadius: 50,
    backgroundColor: 'purple',
  },
  text: {
    fontSize: 24,
  },
});

const Header = ({scrollY}) => {
  const headerHeight = scrollY?.interpolate({
    inputRange: [0, 140],
    outputRange: [140, 70],
    extrapolate: 'clamp',
  });
  return (
    <Animated.View style={[styles.container, {height: headerHeight}]}>
      <View style={styles.profile} />
      <Text style={styles.text}>Lucas Machado</Text>
    </Animated.View>
  );
};

export default Header;
