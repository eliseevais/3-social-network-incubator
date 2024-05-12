import React from "react";
import {DialogsPagePropsType} from "../../redux/store-all-props-types";
import {DialogItem} from "./dialogItem/DialogItem";
import {MessageItem} from "./messageItem/MessageItem";
import {Styles} from "./Dialogs_Styles";
import {Redirect} from "react-router-dom";

export type DialogsPropsType = {
  dialogsPage: DialogsPagePropsType
  updateNewMessageText: (text: string) => void;
  sendMessage: () => void
  isAuth: boolean
};

export const Dialogs = (props: DialogsPropsType) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(dialog =>
    <DialogItem key={dialog.id}
                name={dialog.name}
                id={dialog.id}
                img={dialog.img}
    />);

  let messagesElements = state.messages.map(message =>
    <MessageItem key={message.id} message={message.message}/>);

  let newMessageTextarea = state.newMessageText;

  let onClickSendMessageHandler = () => {
    props.sendMessage()
  };

  const onChangeNewMessageHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    let text = event.currentTarget.value;
    if (text) {
      props.updateNewMessageText(text)
    }
  };

  //if (!props.isAuth) return <Redirect to={'/login'}/>

  return (
    <Styles.Dialogs>
      <div>
        {dialogsElements}
      </div>
      <div>
        {messagesElements}
        <Styles.NewMessageWrapper>
          <Styles.NewMessageTextarea value={state.newMessageText}
                                     onChange={onChangeNewMessageHandler}
                                     placeholder={'Enter your message'}
          />
          <Styles.ButtonSendMessage
            onClick={onClickSendMessageHandler}>send</Styles.ButtonSendMessage>
        </Styles.NewMessageWrapper>
      </div>
    </Styles.Dialogs>
  )
}