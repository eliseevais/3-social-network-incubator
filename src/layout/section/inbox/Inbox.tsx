import React from "react";
import {DialogItem} from "./dialogItem/DialogItem";
import {MessageItem} from "./messageItem/MessageItem";
import {
  sendMessageAC,
  updateNewMessageTextAC
} from "../../../redux/inboxPageReducer";
import {Styles} from "./Inbox_Styles";
import {
  ActionsPropsType,
  InboxPagePropsType
} from "../../../redux/storeAllPropsType";

type InboxPropsType = InboxPagePropsType & {
  updateNewMessageText: (text: string) => void;
  sendMessage: () => void
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
    props.sendMessage()
  };

  const onChangeNewMessageHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    let text = event.currentTarget.value;
    if (text) {
      props.updateNewMessageText(text)
    }
  };

  return (
    <Styles.Inbox>
      <div>
        {dialogsElements}
      </div>
      <div>
        {messagesElements}
        <Styles.NewMessageWrapper>
          <Styles.NewMessageTextarea value={props.newMessageText}
                                     onChange={onChangeNewMessageHandler}
                                     placeholder={'Enter your message'}
          />
          <Styles.ButtonSendMessage
            onClick={onClickSendMessageHandler}>send</Styles.ButtonSendMessage>
        </Styles.NewMessageWrapper>
      </div>
    </Styles.Inbox>
  )
}