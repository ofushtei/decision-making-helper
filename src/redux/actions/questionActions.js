import { GET_QUESTION } from '../actions/types'

export const getQuestions = () => async dispatch => {
	try {
		const res = await fetch('https://dmhbackend.herokuapp.com/questions/')
		const data = await res.json()
		dispatch({
			type: GET_QUESTION,
			payload: data
		})
	} catch (error) {
		console.error(error)
	}
}
