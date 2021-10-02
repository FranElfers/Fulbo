import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text, View } from "react-native"
import FieldDetailScreen from './FieldDetailScreen';
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
      <Stack.Screen name="Detalle de potrero" component={FieldDetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
}

export default HomeScreen