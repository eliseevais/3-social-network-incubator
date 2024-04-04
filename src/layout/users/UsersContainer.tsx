import {connect} from "react-redux";
import {
  followAC, setCurrentPageAC, setTotalUsersCountAC,
  setUsersAC,
  unfollowAC
} from "../../redux/usersPageReducer";
import {AppStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {UserPropsType} from "../../redux/storeAllPropsType";
import React from "react";
import axios from "axios";
import {UsersNew} from "./UsersNew";

type MSTPType = {
  users: Array<UserPropsType>
  pageSize: number
  totalCount: number
  currentPage: number
};
type MDTPType = {
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setUsers: (users: Array<UserPropsType>) => void
  setCurrentPage: (pageNumber: number) => void
  setTotalUsersCount: (totalUsersCount: number) => void
}

export type UsersPagePropsType = MSTPType & MDTPType

class UsersContainer extends React.Component<UsersPagePropsType, {}> {
  componentDidMount() {
    axios.get<{totalCount: number, items: UserPropsType[]}>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    return (
      <UsersNew totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                setCurrentPage={this.props.setCurrentPage}
                setTotalUsersCount={this.props.setTotalUsersCount}
                setUsers={this.props.setUsers}
      />
    )
  }
}


const MSTP = (state: AppStateType): MSTPType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage
  }
}
const MDTP = (dispatch: Dispatch): MDTPType => {
  return {
    follow: (userId: number) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId: number) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users: Array<UserPropsType>) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (pageNumber: number) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (totalCount: number) => {
      dispatch(setTotalUsersCountAC(totalCount))
    }
  }
}

export default connect(MSTP, MDTP)(UsersContainer)