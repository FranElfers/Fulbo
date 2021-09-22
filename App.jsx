import * as React from 'react';
import { Text, Button, Image } from 'react-native';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import UserScreen from './screens/UserScreen';
import OptionsScreen from './OptionsScreen';
import FieldListScreen from './screens/FieldListScreen';
import { BallIcon, OptionsIcon, UserIcon } from './SVG';

const Tab = createBottomTabNavigator();

function App() {

  const emojis = {
    HomeScreen: <BallIcon />,
    UserScreen: <UserIcon />, 
    OptionsScreen: <OptionsIcon />
  }

  // const currentRoute = useRoute()

  return <NavigationContainer>
    <Tab.Navigator screenOptions={({ route }) => {
      return {
        tabBarIcon: () => emojis[route.name],
        tabBarIconStyle: {
          // height: 100%,
          color: '#fff'
        },
        tabBarStyle: {
          padding: 10,
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
      }
    }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={() => ({ headerShown: false })} />
      <Tab.Screen name="OptionsScreen" component={OptionsScreen} />
      <Tab.Screen name="UserScreen" component={UserScreen} options={{ tabBarBadge: 3 }} />
    </Tab.Navigator>
  </NavigationContainer>
}

export default App;