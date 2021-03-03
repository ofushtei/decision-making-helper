import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../components/Home'

const MainStack = createStackNavigator()

const MainStackScreen = () => {
	return (
		<MainStack.Navigator>
			<MainStack.Screen
				name="Home"
				component={Home}
				options={{
					title: 'Decision Making Helper',
					headerStyle: {
						backgroundColor: '#1565c0'
					},
					headerTintColor: '#ffffff',
					headerTitleStyle: {
						fontWeight: '500',
						fontSize: 22
					}
				}}
			/>
		</MainStack.Navigator>
	)
}

export default MainStackScreen
