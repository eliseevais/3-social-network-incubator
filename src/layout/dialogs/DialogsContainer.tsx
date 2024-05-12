import {
  ActionsType,
  DialogsPagePropsType
} from '../../redux/store-all-props-types';
import {AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {Dialogs} from "./Dialogs";
import {
  sendMessageAC,
  updateNewMessageTextAC
} from '../../redux/dialogs-reducer';
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

type MSTPType = {
  dialogsPage: DialogsPagePropsType;
};

let MSTP = (state: AppStateType): MSTPType => ({
  dialogsPage: state.dialogsPage,
});

let MDTP = (dispatch: (action: ActionsType) => void) => {
  return {
    updateNewMessageText: (text: string) => {
      dispatch(updateNewMessageTextAC(text))
    },
    sendMessage: () => {
      dispatch(sendMessageAC())
    }
  }
};

let AuthRedirectComponent = withAuthRedirect(Dialogs);

export const DialogsContainer = connect(MSTP, MDTP)(AuthRedirectComponent);