import React, { HTMLAttributes, useState} from "react";

import { Container } from './style'

type NotificationProps = HTMLAttributes<HTMLDivElement>;

const Notification: React.FC<NotificationProps> = (props) => {

  const [darkMode] = useState(false);
  
  window.localStorage.getItem('');

  return (
    <Container darkMode={darkMode} {...props}/>
  )
}

export default Notification;