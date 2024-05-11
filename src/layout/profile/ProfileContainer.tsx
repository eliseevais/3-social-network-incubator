import React, {Component} from 'react';
import {AppStateType} from '../../redux/reduxStore';
import axios from 'axios';
import {connect} from 'react-redux';
import {Profile} from './Profile';
import {setUserProfile} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {UserType} from "../../redux/storeAllPropsType";

type MSTPType = {
  profile: {
    userId: number,
    lookingForAJob: boolean | null;
    lookingForAJobDescription: string | null;
    fullName: string | null;
    contacts: {
      github: string | null
      vk: string | null
      facebook: string | null
      instagram: string | null
      twitter: string | null
      website: string | null
      youtube: string | null
      mainLink: string | null
    };
    photos: {
      small: string | null,
      large: string | null
    }
  }
};
type MDTPType = {
  setUserProfile: (profile: UserType) => void
};
type PathParamsType = {
  userId: any
}
type OwnPropsType = MSTPType & MDTPType;
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends Component<PropsType, AppStateType> {
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
}

let MSTP = (state: AppStateType): MSTPType => ({
  profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(MSTP, {setUserProfile})(WithUrlDataContainerComponent);