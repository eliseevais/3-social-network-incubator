import {
  ActionsType,
  InitialStateUsersPageType, UserType,
} from "./storeAllPropsType";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState: InitialStateUsersPageType = {
  users: [],
  pageSize: 20,
  totalCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
}
export const usersReducer = (
  state: InitialStateUsersPageType = initialState,
  action: ActionsType): InitialStateUsersPageType => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: true}
          }
          return user
        })
      } as InitialStateUsersPageType
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: false}
          }
          return user
        })
      } as InitialStateUsersPageType
    case SET_USERS:
      return {...state, users: action.users}
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage}
    case SET_TOTAL_USERS_COUNT:
      return {...state, totalCount: action.totalCount}
    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching}
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          // @ts-ignore
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    default:
      return state
  }
}

export const followSuccess = (userId: number) => {
  return {type: FOLLOW, userId}
};
export const unfollowSuccess = (userId: number) => {
  return {type: UNFOLLOW, userId};
};
export const setUsers = (users: Array<UserType>) => {
  return {type: SET_USERS, users};
};
export const setCurrentPage = (currentPage: number) => {
  return {type: SET_CURRENT_PAGE, currentPage}
};
export const setTotalUsersCount = (totalCount: number) => {
  return {type: SET_TOTAL_USERS_COUNT, totalCount}
};
export const toggleIsFetching = (isFetching: any) => {
  return {type: TOGGLE_IS_FETCHING, isFetching}
};
export const toggleIsFollowingProgress = (isFetching: any, userId: number) => {
  return {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId}
};

export const getUsers = (currentPage: number, pageSize: number) => {
  return (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true));

    usersAPI.getUsers(currentPage, pageSize)
      .then(response => {
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount));
        dispatch(toggleIsFetching(false))
      })
  }
};

export const follow = (userId: number) => {
  return (dispatch: Dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    usersAPI.follow(userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(followSuccess(userId));
        }
        dispatch(toggleIsFollowingProgress(false, userId))
      })
  }
};

export const unfollow = (userId: number) => {
  return (dispatch: Dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    usersAPI.unfollow(userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(unfollowSuccess(userId))
        }
        dispatch(toggleIsFollowingProgress(false, userId))
      })
  }
}