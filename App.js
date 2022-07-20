import React, { Suspense } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Screen/Home';
import Details from './src/Screen/Details';
import TabBar from './src/Tab/TabBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import { Icon } from 'react-native-elements'
import Profile from './src/Screen/Profile';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator> */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, colour }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'film' : 'film-outline'
            } else {
              iconName = focused ? 'person-circle' : 'person-circle-outline'
            }
            return <Icon type='ionicon' name={iconName} />
          }
        })
        }
      >

        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Details' component={Details} />
      </Tab.Navigator>
      {/* </Stack.Navigator> */}
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
