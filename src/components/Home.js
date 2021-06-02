import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import StyledButton from './StyledButton'

const Home = ({ navigation }) => {
	const onPress = () => {
		navigation.navigate('Quiz')
	}

	return (
		<View style={styles.container}>
			<Text style={styles.text}>
				Press the button to start the quiz and try{'\n'}to answer as much
				questions as you can
			</Text>
			<Text style={styles.text}>
				All you need is to read the 2 given options,{'\n'}decide which one you
				like more and move{'\n'} the slider to indicate your preference
			</Text>
			<Text style={styles.text}>
				But be careful, <Text style={styles.warning}>time is limited</Text> and
				{'\n'}you can{' '}
				<Text style={styles.warning}>use each slider only once</Text>
			</Text>
			<StyledButton text="Start Quiz" onPress={onPress} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		padding: 20,
		fontSize: 20,
		fontWeight: '400',
		textAlign: 'center'
	},
	warning: {
		padding: 20,
		fontSize: 20,
		fontWeight: '700',
		textAlign: 'center'
	}
})

export default Home
