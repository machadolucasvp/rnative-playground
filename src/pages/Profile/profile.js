import React, {useEffect, useCallback} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {ApiService} from '../../services/api';
import {loadUser, updateAge, updateName} from '../../store/actions/user';
import {connect} from 'react-redux';

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

const ProfilePage = ({
  navigation,
  user,
  loadUserAction,
  updateAgeAction,
  updateNameAction,
}) => {
  const fetchUserData = useCallback(async () => {
    const fetchedUser = await ApiService.getData();
    if (fetchedUser) {
      loadUserAction(fetchedUser);
    }
  }, [loadUserAction]);

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

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  loadUserAction: (user) => dispatch(loadUser(user)),
  updateNameAction: (name) => dispatch(updateName(name)),
  updateAgeAction: (age) => dispatch(updateAge(age)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
