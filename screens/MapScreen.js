import React from 'react'
import db from '../database/firebase'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

/* TODO
popup component with field info
*/

function MapScreen({ navigation }) {
    const [ fieldList, setFieldList ] = React.useState([])

    const updateFieldList = () => {
        db.collection('fields').get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    setFieldList(prev => ([ ...prev, { id:doc.id, ...doc.data()}]))
                })
            })
            .catch(err => console.log('error getting documents'))
    }

    React.useEffect(updateFieldList, [])

	React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', updateFieldList);
        return unsubscribe;
    }, [navigation]);

    return <MapView 
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={{
            latitude: -34.77246094116667,
            longitude: -58.20313002474847,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        }}
    >
        {fieldList.map((field, index) => <Marker
            key={index}
            coordinate={{
                latitude: field.coordinates[0],
                longitude: field.coordinates[1]
            }}
            title={field.name}
            description={'$ ' + field.price}
            image={require('../assets/fulbo_marker.png')}
        />)}
    </MapView>
}

export default MapScreen