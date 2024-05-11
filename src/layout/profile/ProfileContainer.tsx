import React, {Component} from 'react';
import {AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {Profile} from './Profile';
import {getUserProfile} from '../../redux/profile-reducer';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';

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
  };
  isAuth: boolean
};
type MDTPType = {
  getUserProfile: (userId: number) => void;

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
    this.props.getUserProfile(userId)
  }

  render() {
    if (!this.props.isAuth) return <Redirect to={'/login'}/>
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    )
  }
}

let MSTP = (state: AppStateType): MSTPType => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(MSTP, {getUserProfile})(WithUrlDataContainerComponent);