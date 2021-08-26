import * as React from 'react';
import { Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import UserScreen from './UserScreen';
import OptionsScreen from './OptionsScreen';

const User = () => <Text>user</Text>

const LogoTitle = () => <Text>🧇</Text>

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

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

  const emojis = {HomeScreen:'🏠',UserScreen:'👤', OptionsScreen:'⚙'}

  return <NavigationContainer>
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: () => <Text>{emojis[route.name]}</Text>,
      tabBarActiveTintColor: 'tomato',
      tabBarActiveBackgroundColor: 'lightgrey',
      tabBarInactiveTintColor: 'gray',
      tabBarShowLabel: false
    })}>
      <Tab.Screen name="OptionsScreen" component={OptionsScreen} />
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="UserScreen" component={UserScreen} options={{ tabBarBadge: 3 }} />
    </Tab.Navigator>
  </NavigationContainer>

  return <NavigationContainer>
    <Stack.Navigator screenOptions={options} initialRouteName="Home">
      <Stack.Screen name="Home" options={{title: 'Start'}} component={HomeScreen} />
      <Stack.Screen name="User" options={{
        headerTitle: props => <LogoTitle {...props} />,
        headerRight: () => <Button onPress={() => alert('This is a button')} title="Info" color="#0000" />
      }} component={User} />
      <Stack.Screen name="User" options={({ route }) => ({title: route.params.name})} component={UserScreen} />
    </Stack.Navigator>
  </NavigationContainer>
}

export default App;