import Dmitry from "../accets/img/Dmitry.jpg";
import Ekaterina from "../accets/img/Ekaterina.jpg";
import Maria from "../accets/img/Maria.jpg";
import Olga from "../accets/img/Olga.jpg";
import Maxim from "../accets/img/Maxim.jpg";
import {ActionsPropsType} from "./storeAllPropsType";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'

let initialState = {
  users: []
}
export const friendsPageReducer = (state = initialState, action: any) => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {user, followed: true}
          }
          return user
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {user, followed: false}
          }
          return user
        })
      }
    case SET_USERS:
      return {...state, users: [...state.users, ...action.users]}
    default:
      return state
  }
}

export const followAC = (userId: string | number) => {
  return {type: FOLLOW, userId}
};
export const unfollowAC = (userId: string | number) => {
  return {type: UNFOLLOW, userId};
};
export const setUsersAC = (users: any) => {
  return {type: SET_USERS, users};
}