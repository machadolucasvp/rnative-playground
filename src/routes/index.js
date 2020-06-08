import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, Profile} from '../pages';

const Stack = createStackNavigator();

const options = {
  cardStyle: {
    backgroundColor: '#3c4c64',
  },
};

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default Routes;
