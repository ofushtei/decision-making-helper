import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Slider from '@react-native-community/slider'
import { saveAnswer } from '../redux/actions/answerAction'

const QuizItem = ({ question: { title, pair }, saveAnswer }) => {
	const onChange = value => {
		let result = { answer: value, pair: pair }
		saveAnswer(result)
	}

	data = title.split(' VS ')

	return (
		<View style={styles.container}>
			<Text style={styles.textQuestion}>{data[0]}</Text>
			<Text style={styles.textSeparator}>VS</Text>
			<Text style={styles.textQuestion}>{data[1]}</Text>
			<Slider
				style={{ width: 350, height: 60, alignSelf: 'center' }}
				inverted={true}
				minimumValue={-9}
				maximumValue={9}
				minimumTrackTintColor="#999999"
				maximumTrackTintColor="#007BFF"
				step={2}
				value={0}
				onSlidingComplete={onChange}
			/>
			<Text style={styles.textValues}>
				Prefer first{'\t|\t'}Equally{'\t|\t'}Prefer second
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	textValues: {
		textAlign: 'center',
		width: Dimensions.get('window').width
	},
	textQuestion: {
		textAlign: 'center',
		fontSize: 36,
		fontWeight: '500',
		margin: 15
	},
	textSeparator: {
		textAlign: 'center',
		fontSize: 26,
		fontWeight: '400'
	}
})

QuizItem.propTypes = {
	question: PropTypes.object.isRequired,
	saveAnswer: PropTypes.func.isRequired
}

export default connect(null, { saveAnswer })(QuizItem)
