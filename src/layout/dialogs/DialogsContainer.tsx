import {ActionsPropsType} from "../../redux/storeAllPropsType";
import {AppStateType} from "../../redux/reduxStore";
import {
  sendMessageAC,
  updateNewMessageTextAC
} from "../../redux/inboxPageReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state: AppStateType) => {
  return {
    inboxPage: state.dialogsPage
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

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);