import {
  ActionsPropsType,
  NextMessagePropsType, SendMessageActionType,
  UpdateNewMessageTextActionType
} from "./state";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const inboxPageReducer = (
  state: any, action: ActionsPropsType) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessageText;
      return state
    case SEND_MESSAGE:
      let nextMessage: NextMessagePropsType = {
        id: new Date().getTime(),
        message: state.newMessageText
      };
      state.messages.push(nextMessage);
      state.newMessageText = '';
      return state;
    default:
      return state
  }
}

export const updateNewMessageTextAC = (text: string): UpdateNewMessageTextActionType => {
  return {type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text}
};
export const sendMessageAC = (): SendMessageActionType => ({type: SEND_MESSAGE});