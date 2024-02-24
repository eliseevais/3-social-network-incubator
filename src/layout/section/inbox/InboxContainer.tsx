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
import {Inbox} from "./Inbox";

type InboxPropsType = InboxPagePropsType & {
  dispatch: (action: ActionsPropsType) => void
};

export const InboxContainer = (props: InboxPropsType) => {
  let onClickSendMessageHandler = () => {
    props.dispatch(sendMessageAC())
  };

  const onChangeNewMessageHandler = (text: string) => {
    let action = updateNewMessageTextAC(text);
    props.dispatch(action)
  };

  return (
    <Inbox dialogs={props.dialogs}
           messages={props.messages}
           newMessageText={props.newMessageText}
           updateNewMessageText={onChangeNewMessageHandler}
           sendMessage={onClickSendMessageHandler}
    />
  )
}