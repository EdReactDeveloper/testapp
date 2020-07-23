import {
	GET_LIST,
	GET_LIST_SUCCESS,
	GET_LIST_FAIL,
	ADD_ITEM,
	ADD_ITEM_SUCCESS,
	ADD_ITEM_FAIL,
	EDIT_ITEM,
	EDIT_ITEM_FAIL,
	EDIT_ITEM_SUCCESS,
	REMOVE_ITEM_SUCCESS,
	REMOVE_ITEM_FAIL
} from '../actions/types/list';

const initialState = {
	list: [],
	loading: true,
	fetchingItem: false,
	message: ''
};

const reducer = (state = initialState, action) => {
	const { payload, type } = action;
	switch (type) {
		case GET_LIST: {
			return { ...state, loading: true };
		}
		case ADD_ITEM: {
			return {
				...state,
				fetchingItem: true
			};
		}

		case EDIT_ITEM: {
			const list = state.list.map(
				(item) =>
					item._id == payload ? { ...item, edit: item.edit == true ? false : true } : { ...item, edit: false }
			);
			return {
				...state,
				list
			};
		}

		case GET_LIST_SUCCESS:
		case ADD_ITEM_SUCCESS:
			 {
			const list = payload.map((item) => (item = { ...item, edit: false }));
			return { ...state, list, loading: false, fetchingItem: false };
		}

		case EDIT_ITEM_SUCCESS: {
			return {
				...state, list: payload
			}
		}

		case REMOVE_ITEM_SUCCESS: {
			return { ...state, list: payload, loading: false };
		}

		case ADD_ITEM_FAIL:
		case EDIT_ITEM_FAIL:
		case REMOVE_ITEM_FAIL:	
		{
			return { ...state, fetchingItem: false };
		}

		case GET_LIST_FAIL: {
			return { ...state, loading: false, list: [], fetchingItem: false };
		}

		default:
			return state;
	}
};

export default reducer;
