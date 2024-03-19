import {Styles} from "../Inbox_Styles";
import React from "react";

type MessageItem = {
  message: string
};

export const MessageItem = (props: MessageItem) => {
  return (
    <Styles.Message>{props.message}</Styles.Message>
  )
};
