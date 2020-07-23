import {
	LOGIN,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	REGISTER,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGOUT_SUCCESS,
	LOGOUT_FAIL
} from '../actions/types/auth';

import { GET_USER_SUCCESS, GET_USER_FAIL } from '../actions/types/user';

const initialState = {
	user: null,
	loading: false,
	loggedIn: false,
	message: ''
};

const reducer = (state = initialState, action) => {
	const { payload, type } = action;
	switch (type) {
		case LOGIN:
		case REGISTER: {
			return { ...state, loading: true };
		}

		case LOGIN_SUCCESS:
		case GET_USER_SUCCESS: {
			return { ...state, user: payload, loading: false, loggedIn: true };
		}

		case REGISTER_SUCCESS:
			return { ...state, loading: false };

		case REGISTER_FAIL:
		case GET_USER_FAIL:
		case LOGIN_FAIL:
		case LOGOUT_FAIL:
		case LOGOUT_SUCCESS:
			return { ...state, loading: false, user: null, loggedIn: false, message: payload };

		default:
			return state;
	}
};

export default reducer;
