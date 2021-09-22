import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text, View } from "react-native"
import FieldListScreen from './FieldListScreen';
import NewFieldScreen from './NewFieldScreen';

function HomeScreen() {
	const Stack = createNativeStackNavigator()
  return <NavigationContainer independent={true}>
    <Stack.Navigator screenOptions={() => ({
      headerStyle: {
        backgroundColor: '#FFB800'
      },
      headerTintColor: '#fff'
    })}>
      <Stack.Screen name="Potreros" component={FieldListScreen} />
      <Stack.Screen name="Nuevo Potrero" component={NewFieldScreen} />
    </Stack.Navigator>
  </NavigationContainer>
}

export default HomeScreen