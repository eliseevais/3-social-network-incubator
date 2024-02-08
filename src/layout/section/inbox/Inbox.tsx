import React from "react";
import {Styles} from "./Inbox_Styles";
import {DialogItem, DialogItemPropsType} from "./dialogItem/DialogItem";
import {MessageItem} from "./messageItem/MessageItem";

export type MessagePropsType = {
  id: number;
  message: string
};
type ActionPropsType = any;
type InboxPropsType = {
  dialogs: Array<DialogItemPropsType>;
  messages: Array<MessagePropsType>;
  newMessageText: string;
  dispatch: (action: ActionPropsType) => void
};

export const Inbox = (props: InboxPropsType) => {

  let dialogsElements = props.dialogs.map(dialog =>
    <DialogItem key={dialog.id}
                name={dialog.name}
                id={dialog.id}
                img={dialog.img}
    />);

  let messagesElements = props.messages.map(message =>
    <MessageItem key={message.id} message={message.message}/>);
  let newMessageTextarea = React.createRef<HTMLTextAreaElement>();
  let onClickSendMessageHandler = () => {
    let action = {type: 'SEND-MESSAGE'};
    props.dispatch(action)
  };

  const onChangeNewMessageHandler = () => {
    let text = newMessageTextarea.current?.value;
    if (text) {
      let action = {type: 'UPDATE-NEW-MESSAGE-TEXT', newMessageText: text};
      props.dispatch(action)
    }
  }

  return (
    <Styles.Inbox>
      <div>
        {dialogsElements}
      </div>
      <div>
        {messagesElements}
        <Styles.NewMessageWrapper>
          <Styles.NewMessageTextarea ref={newMessageTextarea}
                                     value={props.newMessageText}
                                     onChange={onChangeNewMessageHandler}
          />
          <Styles.ButtonSendMessage
            onClick={onClickSendMessageHandler}>send</Styles.ButtonSendMessage>
        </Styles.NewMessageWrapper>
      </div>
    </Styles.Inbox>
  )
}