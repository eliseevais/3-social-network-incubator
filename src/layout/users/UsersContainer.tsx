import React, {Component} from 'react';
import {AppStateType} from '../../redux/redux-store';
import {UserType} from '../../redux/store-all-props-types';
import {connect} from 'react-redux';
import {Users} from './Users';
import {
  follow,
  getUsers,
  setCurrentPage,
  toggleIsFollowingProgress,
  unfollow
} from '../../redux/users-reducer';
import {Preloader} from "../../common/Preloader";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

type MSTPType = {
  users: Array<UserType>;
  pageSize: number;
  totalCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: []
};
type MDTPType = {
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setCurrentPage: (pageNumber: number) => void;
  getUsers: (currentPage: number, pageSize: number) => void;
  // setUsers?: (users: Array<UserType>) => void;
  // setTotalUsersCount?: (totalUsersCount: number) => void;
  // toggleIsFetching?: (isFetching: boolean) => void;
  // toggleIsFollowingProgress?: any;
};

export type UsersPagePropsType = MSTPType & MDTPType;

class UsersContainer extends Component<UsersPagePropsType, {}> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  };

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader/> : null}
        <Users totalCount={this.props.totalCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               onPageChanged={this.onPageChanged}
               users={this.props.users}
               follow={this.props.follow}
               unfollow={this.props.unfollow}
               setCurrentPage={this.props.setCurrentPage}
               isFetching={this.props.isFetching}
               followingInProgress={this.props.followingInProgress}
               getUsers={this.props.getUsers}
          //setTotalUsersCount={this.props.setTotalUsersCount}
          //setUsers={this.props.setUsers}
          //toggleIsFetching={this.props.toggleIsFetching}
          //toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
        />
      </>
    )
  }
}

const MSTP = (state: AppStateType): MSTPType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}
// const MDTP = (dispatch: Dispatch): MDTPType => {
//   return {
//     follow: (userId: number) => {
//       dispatch(followAC(userId))
//     },
//     unfollow: (userId: number) => {
//       dispatch(unfollowAC(userId))
//     },
//     setUsers: (users: Array<UserPropsType>) => {
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (pageNumber: number) => {
//       dispatch(setCurrentPageAC(pageNumber))
//     },
//     setTotalUsersCount: (totalCount: number) => {
//       dispatch(setTotalUsersCountAC(totalCount))
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching))
//     }
//   }
// }


export default compose<any>(
  withAuthRedirect,
  connect(MSTP, {
      follow,
      unfollow,
      setCurrentPage,
      toggleIsFollowingProgress,
      getUsers
    },
  ))(UsersContainer)