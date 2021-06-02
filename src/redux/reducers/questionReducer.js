import { GET_QUESTION } from '../actions/types'

const initialState = {
	questions: null,
	error: null
}

const questionReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_QUESTION:
			return {
				...state,
				questions: action.payload
			}
		default:
			return state
	}
}

export default questionReducer
