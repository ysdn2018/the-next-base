import React from 'react';
import moment from 'moment';
import CountdownTimer from 'react-awesome-countdowntimer';

export default function Timer(props){
  return(
      <CountdownTimer endDate={moment(props.countDownDate)}/>
  )
}
