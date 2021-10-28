import React, { HTMLAttributes } from "react";

import { Container } from './style'

type NotificationProps = HTMLAttributes<HTMLDivElement>;

const Notification: React.FC<NotificationProps> = (props) => {

  return (
    <Container {...props}/>
  )
}

export default Notification;