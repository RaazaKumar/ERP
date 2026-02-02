import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DueScreen from '../Screen/DueScreen';

const DueStack = () => {
  const Stack = createNativeStackNavigator();
  return (
   <Stack.Navigator>
     <Stack.Screen name='DueScreen' component={DueScreen}/>
   </Stack.Navigator>
  )
}

export default DueStack

const styles = StyleSheet.create({})