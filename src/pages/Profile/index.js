import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View} from 'react-native';
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

const ProfilePage = () => {
  const [user, setUser] = useState({});

  const fetchUserData = async () => {
    const fetchedUser = await ApiService.getData();
    if (fetchedUser) {
      setUser({...user, ...fetchedUser});
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome {user.name ?? 'Guest'} </Text>
    </View>
  );
};

export default ProfilePage;
