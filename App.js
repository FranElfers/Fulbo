import * as React from 'react';
import { View, Text, Button, Image, SafeAreaView, Dimensions, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Waffles from './Waffles'

function HomeScreen({ navigation }) {
  return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button title="Go to Details" onPress={() => navigation.navigate('Details', {name: 'Custom profile header'})} />
    <Button title="Go to User" onPress={() => navigation.navigate('User', {name: 'User #1'})} />
  </View>
}

function DetailsScreen({ navigation }) {
  const [ estado, setEstado ] = React.useState(false)

  const actualizar = () => {
    setEstado(true)
    navigation.setOptions({ title: 'Updated!' })
  }

  return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
    {estado 
      ? <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      : <Button title="Update the title" onPress={actualizar} />
    }
  </View>
}

const User = () => <Text>user</Text>

const LogoTitle = () => <Text>🧇</Text>

const Stack = createNativeStackNavigator();

function App() {
  const options = {
    headerStyle: {
      backgroundColor: "#FFB800"
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }

  return <NavigationContainer>
    <Stack.Navigator screenOptions={options} initialRouteName="Home">
      <Stack.Screen name="Home" options={{title: 'Start'}} component={HomeScreen} />
      <Stack.Screen name="User" options={{
        headerTitle: props => <LogoTitle {...props} />,
        headerRight: () => <Button onPress={() => alert('This is a button')} title="Info" color="#0000" />
      }} component={User} />
      <Stack.Screen name="Details" options={({ route }) => ({title: route.params.name})} component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>  
}

export default App;0