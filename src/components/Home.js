import React from 'react'
import { Button, View, Text, Alert, StyleSheet } from 'react-native'
import StyledButton from './StyledButton'

const Home = ({ navigation }) => {
	const onPress = () => {
		navigation.navigate('Quiz')
		Alert.alert(
			'You will have 2 minutes to answer as much questions as you possibly can'
		)
	}

	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 30 }}>This is the home screen!</Text>
			<StyledButton text="Start Quiz" onPress={onPress} />
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

export default Home
