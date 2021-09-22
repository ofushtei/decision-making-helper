import React, { useEffect } from 'react'
import { View, FlatList, Button, StyleSheet, Dimensions } from 'react-native'
import PagerView from 'react-native-pager-view'
import { StatusBar } from 'expo-status-bar'
import QuizItem from './QuizItem'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getQuestions } from '../redux/actions/questionActions'
import timeout from '../helpers/timeout'
import useCancelablePromise from '@rodw95/use-cancelable-promise'

const Quiz = ({ navigation, question: { questions }, getQuestions }) => {
	// 30000 - 30 sec
	// 60000 - 1 min
	// 120000 - 2 min
	const time = 120000

	const makeCancelable = useCancelablePromise()

	useEffect(() => {
		getQuestions()
		//eslint-disable-next-line
	}, [])

	makeCancelable(timeout(time)).then(() => {
		navigation.goBack()
	})

	function shuffle(array) {
		if (array == null) {
			return array
		}
		var currentIndex = array.length,
			temporaryValue,
			randomIndex

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex)
			currentIndex -= 1

			// And swap it with the current element.
			temporaryValue = array[currentIndex]
			array[currentIndex] = array[randomIndex]
			array[randomIndex] = temporaryValue
		}

		return array
	}
	shuffle(questions)

	return (
		<PagerView style={styles.container} initialPage={0}>
			<FlatList
				data={questions}
				renderItem={({ item }) => <QuizItem question={item} key={item.id} />}
				keyExtractor={item => item.id.toString()}
				snapToAlignment={'start'}
				decelerationRate={'fast'}
				snapToInterval={Dimensions.get('window').height}
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
				ListFooterComponent={
					<View style={styles.saveButton}>
						<Button
							onPress={() => navigation.goBack()}
							title="Save answers and go back"
						/>
					</View>
				}
			/>
			<StatusBar />
		</PagerView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		fontSize: 20,
		padding: 15,
		fontWeight: '400'
	},
	saveButton: {
		height: Dimensions.get('window').height,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})

Quiz.propTypes = {
	question: PropTypes.object.isRequired,
	getQuestions: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	question: state.question
})

export default connect(mapStateToProps, { getQuestions })(Quiz)
