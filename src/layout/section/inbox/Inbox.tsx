import React from "react";
import {Styles} from "./Inbox_Styles";
import {DialogItem, DialogItemPropsType} from "./dialogItem/DialogItem";
import {MessageItem} from "./messageItem/MessageItem";

export type MessagePropsType = {
  id: number;
  message: string
};
type InboxPropsType = {
  dialogs: Array<DialogItemPropsType>;
  messages: Array<MessagePropsType>
};

export const Inbox = (props: InboxPropsType) => {

  let dialogsElements = props.dialogs.map(dialog =>
    <DialogItem key={dialog.id}
                name={dialog.name}
                id={dialog.id}
                img={dialog.img}
    />);

  let messagesElements = props.messages.map(message => <MessageItem
    key={message.id} message={message.message}/>);

  return (
    <Styles.Inbox>
      <div>
        {
          dialogsElements
        }

      </div>
      <div>
        {messagesElements}
      </div>
    </Styles.Inbox>
  )
}