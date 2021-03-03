import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import PropTypes from 'prop-types'

const Header = ({ title }) => {
	return (
		<View style={styles.header}>
			<Text style={styles.text}>{title}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		height: 60,
		padding: 15,
		backgroundColor: 'darkslateblue'
	},
	text: {
		color: '#fff',
		fontSize: 24,
		textAlign: 'center',
		paddingTop: 3
	}
})

Header.propTyper = {
	title: PropTypes.string
}

Header.defaultProps = {
	title: 'Decision Making Helper'
}

export default Header
