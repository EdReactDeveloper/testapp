import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Register from '../components/Auth/Register';
import { validateLength, isEmail } from '../validators'
import { registerAction } from '../store/actions/auth';
import setAlert from '../store/actions/alert'; 

const RegisterContainer = ({ history }) => {
  const dispatch = useDispatch();
  
  // data
  const {loading} = useSelector(state=> state.auth)
  const [state, setState] = useState({
    email: {
      value: '',
      error: ''
    },
    password: {
      value: '',
      error: ''
    },
    passwordRe: {
      value: '',
      error: ''
    }
  })

  // methods
  const submitHandler = (e) => {
    e.preventDefault()
    const { email, password, passwordRe } = state
    setState({
      ...state,
      password: {...password, error: validateLength(6, 25)(password.value).msg },
      email: { ...email, error: isEmail(email.value).msg }
    })
    if (!state.email.error && !state.password.error) {
      if (password.value === passwordRe.value) {
        dispatch(registerAction({ password: password.value, email: email.value }, history))
      } else {
        dispatch(setAlert('passwords should match', 'danger'))
      }
    }
  }

  const onChange = e => {
    setState({ ...state, [e.target.name]: { value: e.target.value, error: '' } })
  }

  // props
  const payload ={
   methods:{ onSubmit: submitHandler, onChange}, 
   data: {email: state.email, password: state.password, passwordRe: state.passwordRe},
   loaders: {loading}
  }

  return (
    <Register {...payload}/>
  );
};

export default RegisterContainer;