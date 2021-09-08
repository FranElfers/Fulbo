import * as React from 'react';
import { Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import UserScreen from './UserScreen';
import OptionsScreen from './OptionsScreen';
import { BallIcon, OptionsIcon, UserIcon } from './SVG';

const User = () => <View>
  <Text>User</Text>
  <BallIcon />
</View>

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

  const emojis = {
    HomeScreen: <BallIcon />,
    UserScreen:<UserIcon />, 
    OptionsScreen:<OptionsIcon />
  }

  return <NavigationContainer>
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: () => emojis[route.name],
      tabBarStyle: {
        padding: 10,
        backgroundColor: '#2E3847',
      },
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: '#606873',
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