import {LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, REGISTER, REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT_SUCCESS, LOGOUT_FAIL} from './types/auth'; 
import auth from '../api/auth'; 
import setAlert from './alert'; 

export const loginAction = (payload) => async dispatch=>{
  dispatch({type: LOGIN})

  try {
    const result = await auth({type: 'login', payload})
    dispatch({
      type: LOGIN_SUCCESS,
      payload: result
    })
  } 
  catch (error) {
    dispatch({type: LOGIN_FAIL})
    const {errors} = error.response.data
   errors && errors.forEach(err => dispatch(setAlert(err.msg, 'danger')))
  }
}

export const registerAction = (payload, history) => async dispatch=>{
  dispatch({type: REGISTER})

  try {
    const result = await auth({type: 'register', payload})
    dispatch({
      type: REGISTER_SUCCESS,
      payload: result
    })
		history.push('/login');
  } 
  catch (error) {
    const {errors} = error.response.data
    dispatch({type: REGISTER_FAIL})
    errors && errors.forEach(err => dispatch(setAlert(err.msg, 'danger')))
  }
}

export const logoutAction = () => async (dispatch) => {
	try {
		await auth({type:'logout'});
		dispatch({ type: LOGOUT_SUCCESS });
  } 
  catch (error) {
		dispatch({ type: LOGOUT_FAIL, paylaod: error });
	}
};
