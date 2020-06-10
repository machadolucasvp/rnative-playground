import React, {useState, useEffect, useCallback} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {ApiService} from '../../services/api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 46,
  },
});

const ProfilePage = ({navigation}) => {
  const [user, setUser] = useState({});

  const fetchUserData = useCallback(async () => {
    const fetchedUser = await ApiService.getData();
    if (fetchedUser) {
      setUser((prevState) => ({...prevState, fetchedUser}));
    }
  }, []);

  const handleOnPress = () => navigation.navigate('About');

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: 'red',
      },
    });
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome {user.name ?? 'Guest'} </Text>
      <Button title="Go to about page..." onPress={handleOnPress} />
    </View>
  );
};

const _ProfilePage = ProfilePage;

export default _ProfilePage;
