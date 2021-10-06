import React from 'react'
import { View, Text, ScrollView, TextInput, StyleSheet, Button } from 'react-native'
import db from '../database/firebase'

/*
# How to Upload File/Image to Server
	https://aboutreact.com/file-uploading-in-react-native/

	# react-native-document-picker
	https://www.npmjs.com/package/react-native-document-picker

	No lo hago ahora porque seguramente no ande en web y todavia no me anda el firebase en mobile
*/

const NewFieldScreen = ({ navigation }) => {
	const [ form, setForm ] = React.useState({
		name: '',
		location: '',
		price: ''
	})

	const handleChange = (name, val) => setForm({ ...form, [name]: val })

	const saveNewField = () => {
		if (!form.name || !form.location || !form.price) return

		db.collection('fields').add({
			name: form.name,
			location: form.location,
			price: form.price			
		}).then(docRef => {
			console.log("Document written with Id", docRef.id)
		}).catch(err => {
			console.log("Error adding Document", err.message)
		})

		/* ""firebase 9"""
		await addDoc(collection(db, 'fields'), {
			name: form.name,
			location: form.location,
			price: form.price
		})
		*/
		navigation.navigate('Potreros')
	}

	return <ScrollView style={styles.container}>
		<View style={styles.inputGroup}>
			<TextInput placeholder="Nombre" onChangeText={value => handleChange('name',value)} />
		</View>
		<View style={styles.inputGroup}>
			<TextInput placeholder="Ubicacion" onChangeText={value => handleChange('location',value)} />
		</View>
		<View style={styles.inputGroup}>
			<TextInput placeholder="Precio por hora" onChangeText={value => handleChange('price',value)} />
		</View>
		<View>
			<Button title="Crear nuevo potrero" onPress={saveNewField} />
		</View>
	</ScrollView>
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 35,
	},
	inputGroup: {
		flex: 1,
		padding: 0,
		marginBottom: 15,
		borderBottomWidth: 1,
		borderBottomColor: '#cccccc'
	}
})

export default NewFieldScreen