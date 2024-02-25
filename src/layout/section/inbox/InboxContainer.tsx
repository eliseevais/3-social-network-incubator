import {
  ActionsPropsType, StatePropsType
} from "../../../redux/storeAllPropsType";
import {
  sendMessageAC,
  updateNewMessageTextAC
} from "../../../redux/inboxPageReducer";
import {Inbox} from "./Inbox";
import {connect} from "react-redux";

let mapStateToProps = (state: StatePropsType) => {
  return {
    inboxPage: state.inboxPage
  }
};

let mapDispatchToProps = (dispatch: (action: ActionsPropsType) => void) => {
  return {
    updateNewMessageText: () => {
      dispatch(sendMessageAC())
    },
    sendMessage: (text: string) => {
      dispatch(updateNewMessageTextAC(text))
    }
  }
};

export const InboxContainer = connect(mapStateToProps, mapDispatchToProps)(Inbox);