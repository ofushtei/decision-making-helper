import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Quiz from '../components/Quiz'
import MainStackScreen from './MainStackScreen'
const RootStack = createStackNavigator()

const MainScreen = () => {
	return (
		<NavigationContainer>
			<RootStack.Navigator mode="modal" headerMode="none">
				<RootStack.Screen name="Main" component={MainStackScreen} />
				<RootStack.Screen name="Quiz" component={Quiz} />
			</RootStack.Navigator>
		</NavigationContainer>
	)
}

export default MainScreen
