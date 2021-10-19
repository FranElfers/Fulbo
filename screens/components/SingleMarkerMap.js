import React from 'react';
import { Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"

const SingleMarkerMap = ({ style, coords }) => {
  React.useEffect(() => { console.log(coords)})
  if (coords.length < 2) return <Text>Nothing</Text>
  return <MapView 
    style={style}
    provider={PROVIDER_GOOGLE}
    showsUserLocation
    scrollEnabled={false}
    initialRegion={{
      latitude: coords[0],
      longitude: coords[1],
      latitudeDelta: 0.00922,
      longitudeDelta: 0.00421
    }}
  >
    <Marker 
      coordinate={{
        latitude: coords[0],
        longitude: coords[1]
      }} 
      image={require('../../assets/mini_fulbo_marker.png')}
    />
  </MapView>
}

export default SingleMarkerMap