import React from 'react'
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import db from '../database/firebase'

const FieldDetailScreen = ({ route, navigation }) => {
	const [ field, setField ] = React.useState({})

	const fieldRef = db.collection('fields').doc(route.params.fieldId)

	React.useEffect(() => {
		fieldRef.get().then(doc => {
			setField(doc.data())
			console.log(doc.exists ? 'Document data '+ doc.data().name : 'No such document')
		})
		// querySnapshot().then(data => setField(data))
	}, [])

	React.useEffect(() => {
		navigation.setOptions({ title: field.name })
		console.log(field.location)
	}, [field])
	
	return <ScrollView>
		<View style={styles.cover}>
			<Image style={styles.coverImage} source={{ uri:"https://i2.wp.com/hipertextual.com/wp-content/uploads/2014/03/windows_xp_bliss-wide.jpg?w=1560&ssl=1" }} />
			<Text style={styles.coverTitle}>{field.name} | ${field.price}</Text>
		</View>
		<View style={styles.container}>
			{field.price !== undefined && <View style={styles.map}>
				<MapView 
					style={{ flex: 1 }}
					provider={PROVIDER_GOOGLE}
					showsUserLocation
					scrollEnabled={false}
					initialRegion={{
						latitude: field.location[0],
            longitude: field.location[1],
            latitudeDelta: 0.00922,
            longitudeDelta: 0.00421
					}}
				>
					<Marker 
						coordinate={{
							latitude: field.location[0],
							longitude: field.location[1]
						}} 
						image={require('../assets/mini_fulbo_marker.png')}
					/>
				</MapView>
			</View>}
		</View>
	</ScrollView>
}

const boxShadow = {
	shadowColor: "#000",
	shadowOffset: {
		width: 0,
		height: 5,
	},
	shadowOpacity: 0.34,
	shadowRadius: 6.27,

	elevation: 10,
}

const styles = StyleSheet.create({
	cover: {
		position: 'relative',
		height: 200,
	},
	coverImage: {
		width: '100%',
		height: 200,
	},
	coverTitle: {
		position: 'absolute',
		bottom: 10,
		left: 15,
		color: '#fff',
		fontSize: 24,
	},
	container: {
		flex: 1,
		padding: 15,
	},
	map: {
		width: 200,
		height: 200,
		borderRadius: 15,
		overflow: 'hidden',
		...boxShadow
	}
})

export default FieldDetailScreen