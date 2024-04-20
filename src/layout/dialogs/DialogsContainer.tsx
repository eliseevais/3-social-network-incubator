import {ActionsPropsType} from '../../redux/storeAllPropsType';
import {AppStateType} from '../../redux/reduxStore';
import {connect} from 'react-redux';
import {Dialogs} from './Dialogs';
import {
  sendMessageAC,
  updateNewMessageTextAC
} from '../../redux/inboxPageReducer';

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