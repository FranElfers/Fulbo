import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import UserScreen from './screens/UserScreen';
import MapScreen from './screens/MapScreen';
import { BallIcon, OptionsIcon, UserIcon } from './SVG';

const Tab = createBottomTabNavigator();

function App() {

  const emojis = {
    Mapa: <BallIcon />,
    UserScreen: <UserIcon />, 
    HomeScreen: <OptionsIcon />
  }

  return <NavigationContainer>
    <Tab.Navigator initialRouteName="HomeScreen" screenOptions={({ route }) => ({
      tabBarIcon: () => emojis[route.name],
      tabBarIconStyle: {
        color: '#fff'
      },
      tabBarStyle: {
        backgroundColor: '#2E3847',
      },
      activeTintColor: '#fff',
      inactiveTintColor: '#606873',
      tabBarActiveTintColor: '#fff',
      tabBarInactiveTintColor: '#606873',
      tabBarShowLabel: false,
      headerStyle: {
        backgroundColor: '#FFB800'
      },
      headerTintColor: '#fff'
    })}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={() => ({ headerShown: false })} />
      <Tab.Screen name="Mapa" component={MapScreen} />
      <Tab.Screen name="UserScreen" component={UserScreen} options={{ tabBarBadge: 3 }} />
    </Tab.Navigator>
  </NavigationContainer>
}

export default App;