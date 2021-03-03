import React from 'react'
import { StyleSheet, View, Pressable, Text } from 'react-native'

const StyledButton = ({ text, onPress }) => {
	return (
		<View style={styles.container}>
			<Pressable style={styles.button} onPress={() => onPress()}>
				<Text style={styles.text}>{text}</Text>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '40%',
		padding: 10
	},
	button: {
		height: 40,
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#007BFF'
	},
	text: {
		fontSize: 17,
		fontWeight: '700',
		textTransform: 'uppercase',
		color: '#fff'
	}
})

export default StyledButton
