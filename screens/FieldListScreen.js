import React from 'react'
import { View, Text, ScrollView, StyleSheet, Button, Image } from 'react-native'
import db from '../database/firebase'

const FieldListScreen = ({ navigation }) => {
	const [ fieldList, setFieldList ] = React.useState([])

	React.useEffect(() => {
		// Esto es firebase 8 que es bastante pesado y poco intuitivo, expo no soporta 9
		db.collection('fields').get()
			.then(querySnapshot => {
				querySnapshot.forEach(doc => {
					setFieldList(prev => ([...prev, {id:doc.id, ...doc.data()}]))
					console.log(doc.id, ' => ', doc.data())
				})
			})
			.catch(err => console.log('Error getting documents'))
	}, [])

	return <ScrollView style={styles.container}>
		<View>
			<Button title="Agregar nuevo potrero" onPress={() => navigation.navigate('Nuevo Potrero')} />
		</View>
		{fieldList.map(field => <View 
			key={field.id} 
			style={styles.fieldCard}
			onTouchStart={() => navigation.navigate('Detalle de potrero', {
				fieldId: field.id
			})}
		>
			<Image 
				style={styles.fieldImage}
				source={{uri: 'https://www.haedosrl.com.ar/images/frontend/notfound.png'}} 
			/>
			<View style={styles.info}>
				<Text>{field.name}</Text>
				<Text>{field.location}</Text>
				<Text>$ {field.price}</Text>
			</View>
		</View>)}
	</ScrollView>
}

const styles = StyleSheet.create({
	fieldImage: {
		width: 60, 
		height: 60,
		marginRight: 10,
		borderRadius: 5
	},
	container: {
		flex: 1,
		padding: 15,
	},
	fieldCard: {
		display: 'flex',
		flexDirection: 'row',
		padding: 5,
		marginTop: 15,
		backgroundColor: 'white',
		borderRadius: 3
	},
	info: {
		margin: 5
	}
})

export default FieldListScreen