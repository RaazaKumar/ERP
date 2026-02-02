import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FeeScreen from '../Screen/FeeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const FeeStack = () => {
  const Stack = createNativeStackNavigator();
  return (
   <Stack.Navigator>
     <Stack.Screen name='FeeScreen' component={FeeScreen}/>
   </Stack.Navigator>
  )
}

export default FeeStack

const styles = StyleSheet.create({})