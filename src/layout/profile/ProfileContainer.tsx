import React, {Component} from 'react';
import {AppStateType} from '../../redux/reduxStore';
import axios from 'axios';
import {connect} from 'react-redux';
import {Profile} from './Profile';
import {setUserProfile} from '../../redux/profileReducer';
import {withRouter} from 'react-router-dom';

class ProfileContainer extends Component<any> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        this.props.setUserProfile(response.data)
      })
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    )
  }
};

let MSTP = (state: AppStateType) => ({
  profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(MSTP, {setUserProfile})(WithUrlDataContainerComponent);