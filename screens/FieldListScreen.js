import React from 'react'
import { View, Text, ScrollView, TextInput, StyleSheet, Button } from 'react-native'
import { collection, getDocs } from 'firebase/firestore'
import db from '../database/firebase'

const FieldListScreen = ({ navigation }) => {
	const [ fieldList, setFieldList ] = React.useState([])

	React.useEffect(() => {
		const querySnapshot = async () => {
			try {
				const docs = await getDocs(collection(db, 'fields'))
				return docs
			}
			catch (err) {
				alert(err.message)
				return
			}
		} 
		querySnapshot().then(data => 
			data.forEach(doc => {
				setFieldList(prev => ([...prev, {id:doc.id, ...doc.data()}]))
			})
		)
	}, [])

	return <ScrollView style={styles.container}>
		<View>
			<Button title="Agregar nuevo potrero" onPress={() => navigation.navigate('Nuevo Potrero')} />
		</View>
		{fieldList.map(field => <View key={field.id} style={styles.inputGroup}>
			<Text>{field.name}</Text>
			<Text>{field.location}</Text>
			<Text>{field.price}</Text>
		</View>)}
	</ScrollView>
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 25,
	},
	inputGroup: {
		flex: 1,
		padding: 5,
		marginTop: 15,
		backgroundColor: 'white',
		borderRadius: 3
	}
})

export default FieldListScreen