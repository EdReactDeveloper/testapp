import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import User from '../components/User';
import { getListAction, addListItemAction, removeListItem, editModeAction, updateItemAction } from '../store/actions/list';
import { validateLength, isEmail } from '../validators'

const UserContainer = () => {

  const dispatch = useDispatch()

  // data
  const { list, loading, fetchingItem } = useSelector(state => state.list)
  const {query} = useSelector(state => state.search)
  const {inProgress} = useSelector(state => state.inprogress)
  const [state, setState] = useState({
    firstName: {
      value: '',
      error: ''
    },
    lastName: {
      value: '',
      error: ''
    },
    email: {
      value: '',
      error: ''
    }
  })

  const [editFields, setEditFields] = useState({
    firstName: '', lastName: '', email: ''
  })

  // methods
  useEffect(() => {
    dispatch(getListAction(query))
  }, [])

  const onChange = ({ e, type }) => {
    if (type == 'edit') {
      setEditFields({ ...editFields, [e.target.name]: e.target.value })
    }
    if (type == 'add') {
      setState({ ...state, [e.target.name]: { value: e.target.value }, error: '' })
    }
  }

  const submitHandler = (e) => {
    const { firstName, lastName, email } = state
    e.preventDefault()
    if(( validateLength(0, 25)(firstName.value).valid || validateLength(0, 25)(lastName.value).valid) &&
      isEmail(email.value).valid ) {
      const payload = { firstName: firstName.value, lastName: lastName.value, email: email.value }
      setState({...state, firstName:{value: ''}, lastName: {value: ''}, email:{value: ''}})
      dispatch(addListItemAction(payload))
    } else{ 
      setState({
        ...state,
        firstName: { ...firstName, error: validateLength(0, 25)(firstName.value).msg },
        email: { ...email, error: isEmail(email.value).msg },
        lastName: { ...lastName, error: validateLength(0, 25)(lastName.value).msg }
      })
    }
  }


  const removeItem = (id) => {
    dispatch(removeListItem(id))
  }

  const editModeHandler = (payload) => {
    const { firstName, lastName, email, _id } = payload
    setEditFields({ firstName, lastName, email })
    dispatch(editModeAction(_id))
  }


  const saveChanges = (id) => {
    const {firstName, lastName, email} = editFields
    const payload={id, firstName, lastName, email}
    dispatch(updateItemAction(payload))
  }

  const payload = {
    methods: { onChange, onSubmit: submitHandler, removeItem, editModeHandler, saveChanges },
    data: { array: list, ...state, editFields },
    loaders: { loading, fetchingItem, inProgress }
  }

  return (
    <User {...payload} />
  );
};

export default UserContainer;