import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

export const Button = ({ title, onPress }) => <TouchableOpacity style={{ borderRadius: 4, backgroundColor: '#ffb800', padding: 5 }} onPress={onPress}>
	<Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>{ title }</Text>
</TouchableOpacity>