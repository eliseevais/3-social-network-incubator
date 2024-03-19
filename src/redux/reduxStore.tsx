import {combineReducers, createStore} from "redux";
import {myPostsPageReducer} from "./myPostsPageReducer";
import {inboxPageReducer} from "./inboxPageReducer";
import {feedsPageReducer} from "./feedsPageReducer";
import {friendsPageReducer} from "./friendsPageReducer";

let reducers = combineReducers({
  myPostsPage: myPostsPageReducer,
  inboxPage: inboxPageReducer,
  feedsPage: feedsPageReducer,
  friendsPage: friendsPageReducer
});

export type AppStoreType = typeof store;
export type RootState = ReturnType<typeof reducers>;

export let store = createStore(reducers);