import { SAVE_ANSWER } from '../actions/types'

const initialState = {
	answers: [],
	error: null
}

const answerReducer = (state = initialState, action) => {
	switch (action.type) {
		case SAVE_ANSWER:
			return {
				...state,
				answers: [...state.answers, action.payload]
			}
		default:
			return state
	}
}

export default answerReducer
