import {
  DialogItemPropsType
} from "../layout/section/inbox/dialogItem/DialogItem";

export type PostPropsType = {
  id: number;
  message: string;
  likesCount: number
};
export type MessagePropsType = {
  id: number;
  message: string
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
export type FeedPropsType = {
  id: number;
  text: string;
};
export type FeedsPagePropsType = {
  feeds: Array<FeedPropsType>
}
export type MyPostsPagePropsType = {
  posts: Array<PostPropsType>;
  newPostText: string
};
export type InboxPagePropsType = {
  dialogs: Array<DialogItemPropsType>;
  messages: Array<MessagePropsType>;
  newMessageText: string
};
export type StatePropsType = {
  myPostsPage: MyPostsPagePropsType;
  inboxPage: InboxPagePropsType;
  feedsPage: FeedsPagePropsType
};
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
export type ActionsPropsType =
  AddPostActionType
  | UpdateNewPostTextActionType
  | UpdateNewMessageTextActionType
  | SendMessageActionType;
export type StorePropsType = {
  _state: StatePropsType;
  _callSubscriber: (state: StatePropsType) => void;

  getState: () => StatePropsType;
  subscribe: (observer: (state: StatePropsType) => void) => void

  dispatch: (action: ActionsPropsType) => void;
};