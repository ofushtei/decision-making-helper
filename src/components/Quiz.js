import React from 'react'
import { View, Text, FlatList, Button, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'

const Quiz = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 30 }}>This is a quiz!</Text>
			<Button
				onPress={() => navigation.goBack()}
				title="Save answers and go back"
			/>
			<StatusBar hidden />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})

export default Quiz
