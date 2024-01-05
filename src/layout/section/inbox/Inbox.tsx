import React from "react";
import {Styles} from "./Inbox_Styles";
import {DialogItem, DialogItemPropsType} from "./dialogItem/DialogItem";
import {MessageItem} from "./messageItem/MessageItem";


type DialogsDataPropsType = {
  [index: number]: DialogItemPropsType
};
type MessagePropsType = {
  id: number;
  message: string
};
type MessageData = {
  [index: number]: MessagePropsType
}
type InboxPropsType = {};

export const Inbox = (props: InboxPropsType) => {
  const DialogsData: DialogsDataPropsType = [
    {id: 1, name: 'Dmitry'},
    {id: 2, name: 'Ekaterina'},
    {id: 3, name: 'Maria'},
    {id: 4, name: 'Olga'},
    {id: 5, name: 'Maxim'}
  ]

  const MessageData: MessageData = [
    {id: 1, message: 'Hello, my friend!'},
    {id: 2, message: 'How are you doing?'},
    {id: 3, message: 'Would you like to go to the cinema?'},
    {id: 4, message: 'No, thanks, I will stay at home to study.'},
  ]
  return (
    <Styles.Inbox>
      <div>
        <DialogItem name={DialogsData[0].name} id={DialogsData[0].id}/>
        <DialogItem name={DialogsData[1].name} id={DialogsData[1].id}/>
        <DialogItem name={DialogsData[2].name} id={DialogsData[2].id}/>
        <DialogItem name={DialogsData[3].name} id={DialogsData[3].id}/>
        <DialogItem name={DialogsData[4].name} id={DialogsData[4].id}/>

      </div>
      <div>
        <MessageItem message={MessageData[0].message}/>
        <MessageItem message={MessageData[1].message}/>
        <MessageItem message={MessageData[2].message}/>
        <MessageItem message={MessageData[3].message}/>
      </div>
    </Styles.Inbox>
  )
}