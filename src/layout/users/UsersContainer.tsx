import {connect} from "react-redux";
import {
  followAC, setCurrentPageAC, setTotalUsersCountAC,
  setUsersAC,
  unfollowAC
} from "../../redux/usersPageReducer";
import {AppStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {UserPropsType} from "../../redux/storeAllPropsType";
import UsersC from "./UsersC";

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

export default connect(MSTP, MDTP)(UsersC)