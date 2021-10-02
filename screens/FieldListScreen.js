import React from 'react'
import { View, Text, ScrollView, StyleSheet, Button, Image } from 'react-native'
import { collection, getDocs } from 'firebase/firestore'
import db from '../database/firebase'

const FieldListScreen = ({ navigation }) => {
	const [ fieldList, setFieldList ] = React.useState([])

	React.useEffect(() => {
		const querySnapshot = async () => {
			const docs = await getDocs(collection(db, 'fields'))
			return docs
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
				<Text style={{fontWeight: 700}}>{field.name}</Text>
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
	}
})

export default FieldListScreen