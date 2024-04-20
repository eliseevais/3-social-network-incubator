// Dialogs
import {AppStateType} from "./reduxStore";

export type DialogItemPropsType = {
  id: number;
  name: string;
  img: any
};
export type MessagePropsType = {
  id: number;
  message: string
};
export type InboxPagePropsType = {
  dialogs: Array<DialogItemPropsType>;
  messages: Array<MessagePropsType>;
  newMessageText: string
};

// Posts
export type PostPropsType = {
  id: number;
  message: string;
  likesCount: number
};
export type NewPostPropsType = {
  id: number;
  message: string;
  likesCount: 0
};
export type NextMessagePropsType = {
  id: number;
  message: string;
};
export type ProfilePagePropsType = {
  posts: Array<PostPropsType>;
  newPostText: string
};

// Feeds
export type FeedPropsType = {
  id: number;
  text: string;
};
// export type FeedsPagePropsType = {
//   feeds: Array<FeedPropsType>
// };

// Users
type LocationUserPropsType = {
  city: string,
  country: string
};
export type UserPropsType = {
  id: number,
  name: string,
  img?: any,
  photos?: any,
  followed: boolean,
  status: string,
  location: LocationUserPropsType
};
export type UsersPagePropsTypeFromApp = {
  users: Array<UserPropsType>
};
export type UserFromServerType = {
  aboutMe: string | null;
  contacts: {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
  };
  lookingForAJob: boolean | null;
  lookingForAJobDescription: string | null;
  fullName: string | null;
  userId: number,
  photos: {
    small: any,
    large: any
  }
};

export type InitialStateUsersPagePropsType = {
  users: Array<UserPropsType>
  pageSize: number
  totalCount: number
  currentPage: number
  isFetching: boolean
};

// ActionTypes
export type AddPostActionType = {
  type: 'ADD-POST'
};
export type UpdateNewPostTextActionType = {
  type: 'UPDATE-NEW-POST-TEXT';
  newPostText: string
};
export type UpdateNewMessageTextActionType = {
  type: 'UPDATE-NEW-MESSAGE-TEXT';
  newMessageText: string
};
export type SendMessageActionType = {
  type: 'SEND-MESSAGE'
};
export type FollowActionType = {
  userId: number;
  type: 'FOLLOW'
};
export type UnfollowActionType = {
  userId: number;
  type: 'UNFOLLOW'
};
type SetUsersActionType = {
  users: Array<UserPropsType>;
  type: 'SET_USERS'
};
type SetCurrentPageActionType = {
  type: 'SET_CURRENT_PAGE';
  currentPage: number
};
type setTotalUsersCountActionType = {
  type: 'SET_TOTAL_USERS_COUNT';
  totalCount: number
};
type toggleIsFetchingActionType = {
  type: 'TOGGLE_IS_FETCHING';
  isFetching: boolean
};
type setUserProfileActionType = {
  type: 'SET_USER_PROFILE';
  profile: any;
};

export type ActionsPropsType =
  | AddPostActionType
  | UpdateNewPostTextActionType
  | UpdateNewMessageTextActionType
  | SendMessageActionType
  | FollowActionType
  | UnfollowActionType
  | SetUsersActionType
  | SetCurrentPageActionType
  | setTotalUsersCountActionType
  | toggleIsFetchingActionType
  | setUserProfileActionType;

export type StorePropsType = {
  _state: AppStateType;
  _callSubscriber: (state: AppStateType) => void;

  getState: () => AppStateType;
  subscribe: (observer: (state: AppStateType) => void) => void

  dispatch: (action: ActionsPropsType) => void;
};