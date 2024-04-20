import React, {Component} from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {setUserProfile} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/reduxStore";

class ProfileContainer extends Component<any> {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        this.props.setUserProfile(response.data)
      })
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
};

let MSTP = (state: AppStateType) => ({
  profile: state.profilePage.profile
})

export default connect(MSTP, {setUserProfile})(ProfileContainer);