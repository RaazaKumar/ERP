import React from 'react';
import { View, Platform, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeStack from './HomeStack';
import AttendanceStack from './AttendanceStack';
import FeeStack from './FeeStack';
import DueStack from './DueStack';
import ProfileStack from './ProfileStack';
import { changeNavigationBarColor } from 'react-native-navigation-bar-color';
import { useEffect } from 'react';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
useEffect(() => {
  changeNavigationBarColor('#000000', false);
}, []);

  return (
    <Tab.Navigator
      screenOptions={({ route, focused }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: Platform.OS === 'android' ? 60 : 80,
          paddingBottom: Platform.OS === 'android' ?90 : 20,
          // paddingTop: 8,
          backgroundColor: '#e81717',
        },

        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },

        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'Hometab') iconName = 'home';
          if (route.name === 'Attendance') iconName = 'event-available';
          if (route.name === 'FeeTab') iconName = 'currency-rupee';
          if (route.name === 'DueTab') iconName = 'payments';
          if (route.name === 'Profile') iconName = 'person';

          return (
            <View
              style={{
                width: 44,
                height: 44,
                // paddingTop: 8,
                // borderRadius: 22,
                // marginBottom: focused ? 20 : 0,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: focused ? '#1e88e5' : 'transparent',
              }}
            >
              <Icon
                name={iconName}
                size={26}
                color={focused ? '#fff' : '#8e8e8e'}
              />

              {focused && (
                <Text style={{ fontSize: 11, color: '#1e88e5', marginTop: 2 }}>
                  {route.name.replace('Tab', '')}
                </Text>
              )}
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Hometab" component={HomeStack} />
      <Tab.Screen name="Attendance" component={AttendanceStack} />
      <Tab.Screen name="FeeTab" component={FeeStack} />
      <Tab.Screen name="DueTab" component={DueStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
}
