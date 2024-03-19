import {Friends} from "./Friends";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/friendsPageReducer";
import {
  ActionsPropsType,
  FriendsPagePropsType,
  StatePropsType
} from "../../redux/storeAllPropsType";

let MSTP = (state: StatePropsType) => {
  return {
    users: state.friendsPage.users
  }
}
let MDTP = (dispatch: (action: any) => void) => {
  return {
    follow: (userId: number) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId: number) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users: any) => {
      dispatch(setUsersAC(users))
    }
  }
}
export default connect(MSTP, MDTP) (Friends)