import {v4 as uuidv4} from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types/alert';

const setAlert = (msg, status, timeout = 2500) => (dispatch) => {
	const id = uuidv4();
	dispatch({
		type: SET_ALERT,
		payload: { msg, status, id }
	});
	setTimeout(() => {
		dispatch({
			type: REMOVE_ALERT,
			payload: id
		});
	}, timeout);
};

export default setAlert;
