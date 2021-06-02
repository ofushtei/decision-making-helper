import { SAVE_ANSWER } from '../actions/types'

export const saveAnswer = answer => async dispatch => {
	try {
		const res = await fetch('https://dmhbackend.herokuapp.com/answers/', {
			method: 'POST',
			body: JSON.stringify(answer),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const data = await res.json()
		dispatch({
			type: SAVE_ANSWER,
			payload: data
		})
	} catch (error) {
		console.error(error)
	}
}
