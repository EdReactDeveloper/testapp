import {
	GET_LIST,
	GET_LIST_SUCCESS,
	GET_LIST_FAIL,
	ADD_ITEM,
	ADD_ITEM_SUCCESS,
	ADD_ITEM_FAIL,
	EDIT_ITEM,
	EDIT_ITEM_SUCCESS,
	EDIT_ITEM_FAIL,
	REMOVE_ITEM_SUCCESS,
	REMOVE_ITEM_FAIL
} from './types/list';

import { getlistApi, addListItemApi, removeListItemApi, updateItemApi } from '../api/list';
import inProgressAction from './inprogress';

export const getListAction = (query = '') => async (dispatch) => {
	dispatch({ type: GET_LIST });

	try {
		const result = await getlistApi(query);
		dispatch({
			type: GET_LIST_SUCCESS,
			payload: result
		});
	} 
	catch (error) {
		dispatch({ type: GET_LIST_FAIL });
	}
};

export const addListItemAction = (payload) => async (dispatch) => {
	dispatch({ type: ADD_ITEM });
	try {
		const result = await addListItemApi(payload);
		dispatch({
			type: ADD_ITEM_SUCCESS,
			payload: result
		});
	} 
	catch (error) {
		dispatch({ type: ADD_ITEM_FAIL });
	}
};

export const removeListItem = (id) => async (dispatch) => {
	dispatch(inProgressAction(true, id));

	try {
		const result = await removeListItemApi(id);
		dispatch(inProgressAction(false, id));
		dispatch({ type: REMOVE_ITEM_SUCCESS, payload: result });
	} 
	catch (error) {
		dispatch({ type: REMOVE_ITEM_FAIL });
		dispatch(inProgressAction(false, id));
	}
};

export const editModeAction = (id) => async (dispatch) => {
	dispatch({ type: EDIT_ITEM, payload: id });
};

export const updateItemAction = (payload) => async (dispatch) => {
	const { id } = payload;
	dispatch(inProgressAction(true, id));
	
	try {
		const result = await updateItemApi(payload);
		dispatch(inProgressAction(false, id));
		dispatch({ type: EDIT_ITEM_SUCCESS, payload: result });
	} 
	catch (error) {
		dispatch({ type: EDIT_ITEM_FAIL });
		dispatch(inProgressAction(false, id));
	}
};
