import React from 'react';
import { useSelector } from 'react-redux';
import Alert from '../components/Alert';

const AlertContainer = () => {
  const alerts = useSelector(state => state.alert)
  return <Alert alerts={alerts} />
}

export default AlertContainer