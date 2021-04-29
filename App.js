import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import MainScreen from './src/screens/MainScreen'
import { Provider } from 'react-redux'
import store from './src/redux/store'

function App() {
	return (
		<Provider store={store}>
			<View style={StyleSheet.absoluteFill}>
				<MainScreen />
				<StatusBar style="light" />
			</View>
		</Provider>
	)
}

export default App
