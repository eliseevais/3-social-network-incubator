import React, {Component} from 'react';
import {Header} from './Header';
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type MSTPType = {
  isAuth: boolean;
  login: string
};
type MDTPType = {
  getAuthUserData: any
};
type OwnPropsType = MSTPType & MDTPType;

class HeaderContainer extends Component<OwnPropsType, AppStateType> {

  componentDidMount() {
    this.props.getAuthUserData()
  }

  render() {
    return (
      <Header {...this.props} />
    )
  }
}

const MSTP = (state: AppStateType): MSTPType => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(MSTP, {getAuthUserData})(HeaderContainer);