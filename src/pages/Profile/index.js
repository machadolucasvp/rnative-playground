import React, {useState, useEffect, useCallback} from 'react';
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

  const fetchUserData = useCallback(async () => {
    const fetchedUser = await ApiService.getData();
    if (fetchedUser) {
      setUser((prevState) => ({...prevState, fetchedUser}));
    }
  }, []);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome {user.name ?? 'Guest'} </Text>
    </View>
  );
};

ProfilePage.navigationOptions = {
  headerStyle: {
    backgroundColor: 'red',
  },
};

export default ProfilePage;
