import React from 'react';
import {Alert} from 'react-bootstrap'; 
import style from './Alert.module.scss'

const AlertMsg = ({alerts}) => {

  return alerts !== null && alerts.length > 0 && alerts.map(alert =>
    <Alert key={alert.id} variant={alert.status} className={style.alert}>
    {alert.msg}
  </Alert>
)
  }

export default AlertMsg;