import React from 'react'
import { View, Text, ScrollView, TextInput, StyleSheet, Button } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import db from '../database/firebase'

/*
# How to Upload File/Image to Server
	https://aboutreact.com/file-uploading-in-react-native/

	# react-native-document-picker
	https://www.npmjs.com/package/react-native-document-picker

	No lo hago ahora porque seguramente no ande en web y todavia no me anda el firebase en mobile
	Update: web dev quedo en el pasado. Firebase ya anda en mobile.

# Geolocation
	Esto va a ser lo mas dificil de la app xd
	Voy a tomar referencia de pedidos ya que me gusto como lo hacen
	Update: uso una vm gratis de aws con un server corriendo puppeteer que geolocaliza con una web
*/

const NewFieldScreen = ({ navigation }) => {
	const [ form, setForm ] = React.useState({
		name: '',
		location: '',
		latitude: 0.0,
		longitude: 0.0,
		price: ''
	})

	const handleChange = (name, val) => setForm({ ...form, [name]: val })

	const saveNewField = () => {
		if (!form.name || !form.location || !form.price) return

		db.collection('fields').add({
			name: form.name,
			location: [parseFloat(form.latitude), parseFloat(form.longitude)],
			price: form.price
		}).then(docRef => {
			console.log("Document written with Id", docRef.id)
		}).catch(err => {
			console.log("Error adding Document", err.message)
		})

		navigation.navigate('Potreros')
	}

	const geolocate = () => {
		String.prototype.replaceAll = function(search, replacement) {
			var target = this;
			return target.replace(new RegExp(search, 'g'), replacement);
		};

		const url = 'http://ec2-18-228-9-168.sa-east-1.compute.amazonaws.com:3000/geolocate?' + form.location.replaceAll(' ', '+')
		
		console.log(url)
		fetch(url)
		.then(response => response.json())
		.then(({ coords }) => {
			console.log({coords})
			setForm({ ...form, latitude: parseFloat(coords[0]), longitude: parseFloat(coords[1]) })
		})
		.catch(err => console.log(err))
	}

	return <ScrollView style={styles.container}>
		<View style={styles.inputGroup}>
			<View style={styles.field1}>
				<TextInput placeholder="Nombre" onChangeText={value => handleChange('name',value)} />
			</View>
		</View>
		<View style={styles.inputGroup}>
			<View style={styles.field1} >
				<TextInput placeholder="ubicacion" onChangeText={value => handleChange('location',value)} />
				<Text>{form.latitude} {form.longitude}</Text>
				<Button title="Buscar" onPress={geolocate} />
				{form.latitude !== 0.0 && <View style={styles.map}>
					<MapView 
						style={{ flex: 1 }}
						provider={PROVIDER_GOOGLE}
						showsUserLocation
						scrollEnabled={false}
						initialRegion={{
							latitude: form.latitude,
							longitude: form.longitude,
							latitudeDelta: 0.00922,
							longitudeDelta: 0.00421
						}}
					>
						<Marker 
							coordinate={{
								latitude: form.latitude,
								longitude: form.longitude
							}} 
							image={require('../assets/mini_fulbo_marker.png')}
						/>
					</MapView>
				</View>}
			</View>
		</View>
		<View style={styles.inputGroup}>
			<View style={styles.field1}>
				<TextInput placeholder="Precio por hora" onChangeText={value => handleChange('price',value)} />
			</View>
		</View>
		<View>
			<Button title="Crear nuevo potrero" onPress={saveNewField} />
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
	container: {
		flex: 1,
		padding: 15,
	},
	inputGroup: {
		display: 'flex',
		flexDirection: 'row',
		// justifyContent: 'space-between',
		paddingLeft: 5,
		paddingRight: 5,
		marginBottom: 35,
		borderBottomWidth: 1,
		borderBottomColor: '#cccccc'
	},
	field1: {
		width: '100%'
	},
	field2: {
		width: '50%'
	},
	map: {
		width: 200,
		height: 200,
		borderRadius: 15,
		overflow: 'hidden',
		...boxShadow
	}
})

export default NewFieldScreen
