import React from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  welcomeBox: {
    justifyContent: 'space-around',
    backgroundColor: '#f2e2de',
    padding: 10,
    borderRadius: 15,
    height: 100,
  },
});

const HomePage = ({navigation}) => {
  const handleOnPress = () => navigation.navigate('Profile');

  return (
    <View style={styles.container}>
      <View style={styles.welcomeBox}>
        <Text>Hello World in Home Page</Text>
        <Button title="Go to profile page..." onPress={handleOnPress} />
      </View>
    </View>
  );
};

export default HomePage;
