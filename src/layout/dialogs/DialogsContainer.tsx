import {ActionsType} from '../../redux/storeAllPropsType';
import {AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {Dialogs} from './Dialogs';
import {
  sendMessageAC,
  updateNewMessageTextAC
} from '../../redux/dialogs-reducer';

let mapStateToProps = (state: AppStateType) => {
  return {
    inboxPage: state.dialogsPage
  }
};

let mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
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