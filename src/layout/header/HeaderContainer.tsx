import React, {Component} from 'react';
import axios from 'axios';
import {Header} from './Header';
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/reduxStore";

type MSTPType = {
  isAuth: boolean;
  login: string
};
type MDTPType = {
  setAuthUserData: (userId: number, email: string, login: string) => void
};
type OwnPropsType = MSTPType & MDTPType;

class HeaderContainer extends Component<OwnPropsType, AppStateType> {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
      .then(response => {
        if (response.data.resultCode === 0) {
          let {id, email, login} = response.data.data
          this.props.setAuthUserData(id, email, login)
        }
      })
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

export default connect(MSTP, {setAuthUserData})(HeaderContainer);