import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Button } from './components/CustomElements'
import db from '../database/firebase'

const FieldListScreen = ({ navigation }) => {
	const [ fieldList, setFieldList ] = React.useState([])

	const updateFieldList = () => {
		console.log('updating')
		db.collection('fields').get()
			.then(querySnapshot => {
				setFieldList([])
				querySnapshot.forEach(doc => {
					setFieldList(prev => ([...prev, {id:doc.id, ...doc.data()}]))
				})
			})
			.catch(err => console.log('Error getting documents'))
	}

	React.useEffect(updateFieldList, [])

	React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', updateFieldList);
    return unsubscribe;
  }, [navigation]);

	return <ScrollView style={styles.container}>
		<View>
			<Button title="Agregar nuevo potrero" onPress={() => navigation.navigate('Nuevo Potrero')} />
		</View>
		{fieldList.map((field,index) => <>
			<TouchableOpacity 
				key={field.id} 
				style={styles.fieldCard}
				onPress={() => navigation.navigate('Detalle de potrero', {
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
			</TouchableOpacity>
			{index !== fieldList.length - 1 && <View style={styles.separator}></View>}
		</>)}
	</ScrollView>
}

const styles = StyleSheet.create({
	separator: {
		height: 1, 
		width: '100%', 
		backgroundColor: 'lightgrey',
		marginTop: 7,
		marginBottom: 7
	},
	fieldImage: {
		width: 70, 
		height: 70,
		marginRight: 10,
		borderRadius: 5
	},
	container: {
		flex: 1,
		padding: 15,
		backgroundColor: 'white' 
	},
	fieldCard: {
		display: 'flex',
		flexDirection: 'row',
		padding: 5,
		// marginTop: 15,
		backgroundColor: 'white',
		borderRadius: 3
	},
	info: {
		margin: 5
	}
})

export default FieldListScreen