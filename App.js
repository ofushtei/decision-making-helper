import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import MainScreen from './src/screens/MainScreen'

function App() {
	return (
		<View style={StyleSheet.absoluteFill}>
			<MainScreen />
			<StatusBar style="light" />
		</View>
	)
}

export default App
