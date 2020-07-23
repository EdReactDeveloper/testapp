import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'; 
import { loginAction } from '../store/actions/auth';
import { validateLength, isEmail } from '../validators'
import Login from '../components/Auth/Login'; 

const LoginContainer = ({}) => {

  const dispatch = useDispatch()
  const {loading} = useSelector(state=> state.auth)

  // data
  const [state, setState] = useState({
    email: {
      value: '',
      error: ''
    },
    password: {
      value: '',
      error: ''
    }, 
    message: ''
  })

  
  // methods
  const submitHandler = (e) => {
    e.preventDefault()
    const { email, password } = state
    setState({
      ...state,
      password: { ...password, error: validateLength(6, 25)(password.value).msg },
      email: { ...email, error: isEmail(email.value).msg }
    })
    if (!email.error && !password.error) {
      const { password, email } = state
      dispatch(loginAction({ password: password.value, email: email.value }))
    }
  }

  const onChange = e => {
    setState({ ...state, [e.target.name]: { value: e.target.value, error: '' } })
  }

  // props
  const payload = {
    methods: {onChange, handleSubmit: submitHandler},
    data: {email: state.email, password: state.password}, 
    loaders: {loading} 
  }

  return (
      <Login {...payload} />
  );
};

export default LoginContainer;