import React from "react";
import {Styles} from "./Inbox_Styles";
import {DialogItem, DialogItemPropsType} from "./dialogItem/DialogItem";
import {MessageItem} from "./messageItem/MessageItem";


type DialogsDataPropsType = Array<DialogItemPropsType>;
export type MessagePropsType = {
  id: number;
  message: string
};
type MessageData = Array<MessagePropsType>;
type InboxPropsType = {};

export const Inbox = (props: InboxPropsType) => {
  const dialogs: DialogsDataPropsType = [
    {id: 1, name: 'Dmitry'},
    {id: 2, name: 'Ekaterina'},
    {id: 3, name: 'Maria'},
    {id: 4, name: 'Olga'},
    {id: 5, name: 'Maxim'}
  ];

  let dialogsElements = dialogs
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

  const messages: MessageData = [
    {id: 1, message: 'Hello, my friend!'},
    {id: 2, message: 'How are you doing?'},
    {id: 3, message: 'Would you like to go to the cinema?'},
    {id: 4, message: 'No, thanks, I will stay at home to study.'},
  ];

  let messagesElements = messages
    .map(message => <MessageItem message={message.message}/>);

  return (
    <Styles.Inbox>
      <div>
        {dialogsElements}
      </div>
      <div>
        {messagesElements}
      </div>
    </Styles.Inbox>
  )
}