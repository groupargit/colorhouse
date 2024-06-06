import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createSwitchNavigator} from '@react-navigation/compat';
import Loading from './src/screens/container/loading';
import Login from './src/screens/container/login';
import NavigationTab from './src/navigation/NavigationTab';
import {Provider} from 'react-redux';
import store from './store';
import {Auth0Provider} from 'react-native-auth0';
// Define types for the props if needed, otherwise leave it as an empty object

const App = () => {
  // Print the props to see what is inside
  return (
    <Auth0Provider
      domain={'dev-4mxy06jq08ifoblf.us.auth0.com'}
      clientId={'9vZ6xye1wEit4i5JQqT6JH4vP3JsjRrD'}>
      <Provider store={store}>
        <NavigationContainer>
          <SwitchNavigator />
        </NavigationContainer>
      </Provider>
    </Auth0Provider>
  );
};

const SwitchNavigator = createSwitchNavigator(
  {
    Loading: {screen: Loading},
    NavigationTab: NavigationTab,
    Login: Login,
  },
  {
    initialRouteName: 'Login',
  },
);

export default App;
