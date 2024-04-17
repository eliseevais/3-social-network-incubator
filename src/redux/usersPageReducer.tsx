import {
  ActionsPropsType,
  InitialStateUsersPagePropsType, UserPropsType,
} from "./storeAllPropsType";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState: InitialStateUsersPagePropsType = {
  users: [],
  pageSize: 20,
  totalCount: 0,
  currentPage: 1,
  isFetching: false
}
export const usersPageReducer = (
  state: InitialStateUsersPagePropsType = initialState,
  action: ActionsPropsType): InitialStateUsersPagePropsType => {

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
      } as InitialStateUsersPagePropsType
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: false}
          }
          return user
        })
      } as InitialStateUsersPagePropsType
    case SET_USERS:
      return {...state, users: action.users}
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage}
    case SET_TOTAL_USERS_COUNT:
      return {...state, totalCount: action.totalCount}
    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching}
    default:
      return state
  }
}

export const follow = (userId: number) => {
  return {type: FOLLOW, userId}
};
export const unfollow = (userId: number) => {
  return {type: UNFOLLOW, userId};
};
export const setUsers = (users: Array<UserPropsType>) => {
  return {type: SET_USERS, users};
};
export const setCurrentPage = (currentPage: number) => {
  return {type: SET_CURRENT_PAGE, currentPage}
};
export const setTotalUsersCount = (totalCount: number) => {
  return {type: SET_TOTAL_USERS_COUNT, totalCount}
};
export const toggleIsFetching = (isFetching: boolean) => {
  return {type: TOGGLE_IS_FETCHING, isFetching}
}