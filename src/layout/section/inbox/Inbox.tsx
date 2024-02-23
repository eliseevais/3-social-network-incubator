import React from "react";
import {ActionsPropsType, InboxPagePropsType} from "../../../redux/state";
import {DialogItem} from "./dialogItem/DialogItem";
import {MessageItem} from "./messageItem/MessageItem";
import {
  sendMessageAC,
  updateNewMessageTextAC
} from "../../../redux/inboxPageReducer";
import {Styles} from "./Inbox_Styles";

type InboxPropsType = InboxPagePropsType & {
  dispatch: (action: ActionsPropsType) => void
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
    props.dispatch(sendMessageAC())
  };

  const onChangeNewMessageHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    let text = event.currentTarget.value;
    if (text) {
      props.dispatch(updateNewMessageTextAC(text))
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