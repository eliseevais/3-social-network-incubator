import {
  ActionsPropsType, StatePropsType
} from "../../redux/storeAllPropsType";
import {
  sendMessageAC,
  updateNewMessageTextAC
} from "../../redux/inboxPageReducer";
import {Inbox} from "./Inbox";
import {connect} from "react-redux";

let mapStateToProps = (state: StatePropsType) => {
  return {
    inboxPage: state.inboxPage
  }
};

let mapDispatchToProps = (dispatch: (action: ActionsPropsType) => void) => {
  return {
    updateNewMessageText: (text: string) => {
      dispatch(updateNewMessageTextAC(text))
    },
    sendMessage: () => {
      dispatch(sendMessageAC())
    }
  }
};

export const InboxContainer = connect(mapStateToProps, mapDispatchToProps)(Inbox);