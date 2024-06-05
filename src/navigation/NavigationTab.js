import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import NavigationHome from './NavigationHome';
import Settings from '../screens/container/Settings';
import Orders from '../screens/container/Orders';

const Tab = createBottomTabNavigator();
const TabLayout = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        activeTintColor: '#e91e63',
        labelStyle: {
          fontSize: 23,
        },
        style: {
          backgroundColor: '#eaeaea',
        },
      }}>
      <Tab.Screen
        name="TyS"
        component={Orders}
        options={{
          headerShown: false,
          tabBarLabel: 'Tramites y servicios',
          tabBarIcon: () => (
            <Image
              source={require('../../assets/ic_home/ic_home.png')}
              style={{width: 30, height: 30}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: () => renderImageMenu(),
        }}
        component={NavigationHome}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          tabBarLabel: 'Settings',
          tabBarIcon: ({}) => (
            <Image
              source={require('../../assets/ic_settings/ic_settings.png')}
              style={{width: 30, height: 30}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabLayout;

function renderImageMenu() {
  return (
    <Image
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        width: 30,
        height: 30,
        top: -10,
        marginLeft: 10,
        marginRight: 10,
      }}
      source={require('../../assets/agtech_logo.png')}
    />
  );
}
