import React, {  FunctionComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from './../components/color';
import {  RootTabParamList } from '../types';
import { StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import Home from '../screens/HomeScreen';
import Display from '../screens/DisplayScreen';
import Capture from '../screens/CaptureScreen';

// Screen Names
const homeScreen = "Home";
const displayScreen = "Display";
const captureScreen = "Capture";

const Navigation: FunctionComponent = () => {
  Ionicons.loadFont();

  return (
    <NavigationContainer>
      <BottomNavigator/>
    </NavigationContainer>
  )
}

const Tab = createBottomTabNavigator<RootTabParamList>();

function BottomNavigator() {
  return (
    <Tab.Navigator 
        initialRouteName={homeScreen}
        screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          borderRadius: 15,
          bottom: 25,
          left: 20,
          right: 20,
          height: 80,
          ...style.shadow
        },
        headerShown: false,
        tabBarInactiveTintColor: colors.graydark,
        tabBarActiveTintColor: colors.primary,
      }}>
      <Tab.Screen 
        name={homeScreen} 
        component={Home}
        options={{
          tabBarLabelStyle: {
            ... style.labelStyle
          },
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 15}}>
              <Ionicons name="home" color={color} size={size} />
            </View>
          ),
        }}
        ></Tab.Screen>
      <Tab.Screen 
        name={displayScreen} 
        component={Display}
        options={{
          tabBarLabelStyle: {
            ... style.labelStyle
          },
          tabBarLabel: 'Display',
          tabBarIcon: ({ color, size }) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 15}}>
              <Ionicons name="grid" color={color} size={size} />
            </View>
          ),
        }}
        ></Tab.Screen>
      <Tab.Screen 
        name={captureScreen} 
        component={Capture}
        options={{
          tabBarLabelStyle: {
            ... style.labelStyle
          },
          tabBarLabel: 'Capture',
          tabBarIcon: ({ color, size  }) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 15}}>
              <Ionicons name="save" color={color} size={size} />
            </View>
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  )
}

const style = StyleSheet.create({
  labelStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    top: 15,
  },
  shadow: {
    shadowColor: colors.secondary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
});

export default Navigation;