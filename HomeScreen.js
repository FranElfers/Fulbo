import React from 'react';
import { Button, Text, View } from "react-native"

function HomeScreen({ navigation }) {
	
  return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button title="Go to User" onPress={() => navigation.navigate('UserScreen', {name: 'Custom profile header'})} />
    {/* <Button title="Go to User" onPress={() => navigation.navigate('User', {name: 'User #1'})} /> */}
  </View>
}

export default HomeScreen