import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import store from './store/configureStore';
import {Provider} from 'react-redux';

const App = () => (
  <NavigationContainer>
    <Provider store={store}>
      <Routes />
    </Provider>
  </NavigationContainer>
);

export default App;
