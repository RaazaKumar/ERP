import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AttendanceScreen from '../Screen/AttendanceScreen';

const AttendanceStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name='AttendanceScreen' component={AttendanceScreen}/>
    </Stack.Navigator>
  )
}

export default AttendanceStack

const styles = StyleSheet.create({})