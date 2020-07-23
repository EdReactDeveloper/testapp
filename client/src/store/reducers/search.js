import { SEARCH } from '../actions/types/search';

const initialState = {
	query: ''
};

const reducer = (state = initialState, action) => {
	const { payload, type } = action;
	switch (type) {
		case SEARCH: {
			return { ...state, query: payload };
		}

		default:
			return state;
	}
};

export default reducer;
