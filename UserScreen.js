import { useFocusEffect, useRoute } from '@react-navigation/native';
import React from 'react';
import { Button, Image, Text, View } from 'react-native';

function UserScreen({ navigation, route }) {
  const [ estado, setEstado ] = React.useState(false)

	React.useEffect(() => {
		return navigation.addListener('focus', () => {
			actualizar(false)
		})
	}, [navigation])
	
  const actualizar = (x = true) => {
		setEstado(x)
		navigation.setOptions({ title: x ? 'Updated!' : route.name })
  }

  return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>User Screen</Text>
    <Image source={require('./assets/icon_user.svg')} />
    {estado 
      ? <Button title="Go to Home" onPress={() => navigation.navigate('HomeScreen')} />
      : <Button title="Update the name" onPress={actualizar} />
    }
  </View>
}

export default UserScreen