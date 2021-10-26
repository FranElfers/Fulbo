import React from 'react'
import { View, Text, ScrollView, TextInput, StyleSheet, Button } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import db from '../database/firebase'
import SingleMarkerMap from './components/SingleMarkerMap'

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
		coords: [],
		price: ''
	})
	const [ loading, setLoading ] = React.useState(false)

	const handleChange = (name, val) => setForm({ ...form, [name]: val })

	const saveNewField = () => {
		if (!form.name || !form.location || !form.price) return

		db.collection('fields').add({
			name: form.name,
			location: form.location,
			coordinates: form.coords,
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
		setLoading(true)

		const url = 'http://ec2-18-228-9-168.sa-east-1.compute.amazonaws.com:3000/geolocate?' + form.location.replaceAll(' ', '+')
		
		console.log(url)
		fetch(url)
		.then(response => response.json())
		.then(({ coords }) => {
			console.log({coords})
			setLoading(false)
			setForm({ ...form, coords: coords.map(x => parseFloat(x)) })
		})
		.catch(err => {
			console.log(err)
			setLoading(false)
		})
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
				{loading && <Text>Cargando...</Text>}
				{(form.coords.length === 2 && !loading) && <View style={styles.map}>
					<SingleMarkerMap style={{ flex: 1}} coords={form.coords} />
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
		width: '100%',
		height: 200,
		marginTop: 15,
		marginBottom: 15,
		borderRadius: 15,
		overflow: 'hidden',
		// ...boxShadow
	}
})

export default NewFieldScreen
