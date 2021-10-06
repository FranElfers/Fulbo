import React from 'react'
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native'
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
	}, [field])
	
	return <ScrollView>
		<View style={styles.cover}>
			<Image style={styles.coverImage} source={{ uri:"https://i2.wp.com/hipertextual.com/wp-content/uploads/2014/03/windows_xp_bliss-wide.jpg?w=1560&ssl=1" }} />
			<Text style={styles.coverTitle}>{field.name}</Text>
		</View>
		<View style={styles.container}>
			<Text>{field.location}</Text>
			<Text>{field.price}</Text>
		</View>
	</ScrollView>
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
	}
})

export default FieldDetailScreen