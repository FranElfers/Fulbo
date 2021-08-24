import React from 'react'
import { Dimensions, Image, Pressable, SafeAreaView } from 'react-native'

const Waffles = () => {
	const [ waffle, setWaffle ] = React.useState(1)
  const [ url, setUrl ] = React.useState('')

  const update = () => {
    setWaffle(waffle < 5 ? waffle + 1 : 1)
    setUrl(`asset:/waffle${waffle}.png`)
  }

	return <SafeAreaView style={{
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'saddlebrown', 
    height: Dimensions.get('window').height
  }}>
    <Pressable onPress={update} >
      <Image style={{width: 200, height: 138}} source={require('./assets/waffle1.png')} />
    </Pressable>
  </SafeAreaView>
}

export default Waffles