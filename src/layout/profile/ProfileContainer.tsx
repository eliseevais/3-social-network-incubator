import React, {Component} from "react";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {
  getUserProfileTC,
  getUserStatusTC,
  updateStatusTC
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

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
  status: string
};

type MDTPType = {
  getUserProfile: (userId: number) => void;
  getUserStatus: (userId: number) => void;
  updateStatus: (status: string) => void;
};
type PathParamsType = {
  userId: any
};
type OwnPropsType = MSTPType & MDTPType;
export type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType;

class ProfileContainer extends Component<PropsType, AppStateType> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 28730;
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile}
               status={this.props.status}
               updateStatus={this.props.updateStatus}
      />
    )
  }
}

let MSTP = (state: AppStateType): MSTPType => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
});

export default compose<React.ComponentType>(
  connect(MSTP, {
    getUserProfile: getUserProfileTC,
    getUserStatus: getUserStatusTC,
    updateStatus: updateStatusTC
  }),
  withRouter,
  //withAuthRedirect,
)(ProfileContainer)
