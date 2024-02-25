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
import { StoreContext } from "../../../redux/storeContext";
import {store} from "../../../redux/reduxStore";

type InboxPropsType = InboxPagePropsType & {
  dispatch: (action: ActionsPropsType) => void
};

// export const InboxContainer = (props: InboxPropsType) => {
export const InboxContainer = () => {

  return (
    <StoreContext.Consumer>
      {
      (store) => {
        let onClickSendMessageHandler = () => {
          store.dispatch(sendMessageAC())
        };

        const onChangeNewMessageHandler = (text: string) => {
          let action = updateNewMessageTextAC(text);
          store.dispatch(action)
        }
        return (
          <Inbox dialogs={store.getState().inboxPage.dialogs}
                 messages={store.getState().inboxPage.messages}
                 newMessageText={store.getState().inboxPage.newMessageText}
                 updateNewMessageText={onChangeNewMessageHandler}
                 sendMessage={onClickSendMessageHandler}
          />
        )
      }
    }

    </StoreContext.Consumer>
  )
}