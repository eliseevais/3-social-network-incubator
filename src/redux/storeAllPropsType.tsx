// Dialogs
import {AppStateType} from "./reduxStore";

export type DialogItemType = {
  id: number;
  name: string;
  img: any
};
export type MessageType = {
  id: number;
  message: string
};
export type InboxPagePropsType = {
  dialogs: Array<DialogItemType>;
  messages: Array<MessageType>;
  newMessageText: string
};

// Posts
export type PostType = {
  id: number;
  message: string;
  likesCount: number
};
export type NewPostType = {
  id: number;
  message: string;
  likesCount: 0
};
export type NextMessageType = {
  id: number;
  message: string;
};
export type ProfilePageType = {
  posts: Array<PostType>;
  newPostText: string
};

// Feeds
export type FeedType = {
  id: number;
  text: string;
};
// export type FeedsPageType = {
//   feeds: Array<FeedType>
// };

// Users
type LocationUserType = {
  city: string,
  country: string
};
export type UserType = {
  id: number,
  name: string,
  img?: any,
  photos?: any,
  followed: boolean,
  status: string,
  location: LocationUserType
};
export type UsersPageTypeFromApp = {
  users: Array<UserType>
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

export type InitialStateUsersPageType = {
  users: Array<UserType>
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
  users: Array<UserType>;
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

export type ActionsType =
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

export type StoreType = {
  _state: AppStateType;
  _callSubscriber: (state: AppStateType) => void;

  getState: () => AppStateType;
  subscribe: (observer: (state: AppStateType) => void) => void

  dispatch: (action: ActionsType) => void;
};