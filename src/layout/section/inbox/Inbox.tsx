import React from "react";
import {Styles} from "./Inbox_Styles";
import {DialogItem} from "./dialogItem/DialogItem";
import {MessageItem} from "./messageItem/MessageItem";

type InboxPropsType = {};

export const Inbox = (props: InboxPropsType) => {
  return (
    <Styles.Inbox>
      <div>
        <DialogItem name='Dmitry' id='1'/>
        <DialogItem name='Ekaterina' id='2'/>
        <DialogItem name='Maria' id='3'/>
        <DialogItem name='Olga' id='4'/>
        <DialogItem name='Maxim' id='5'/>
      </div>
      <div>
        <MessageItem message='Hello, my friend!'/>
        <MessageItem message='How are you doing?'/>
        <MessageItem message='Would you like to go to the cinema?'/>
      </div>
    </Styles.Inbox>
  )
}