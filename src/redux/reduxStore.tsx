import {combineReducers, createStore} from "redux";
import {myPostsPageReducer} from "./myPostsPageReducer";
import {inboxPageReducer} from "./inboxPageReducer";
import {feedsPageReducer} from "./feedsPageReducer";
import {usersPageReducer} from "./usersPageReducer";

let rootReducer = combineReducers({
  myPostsPage: myPostsPageReducer,
  inboxPage: inboxPageReducer,
  feedsPage: feedsPageReducer,
  usersPage: usersPageReducer
});

export type AppStoreType = typeof store;
export type AppStateType = ReturnType<typeof rootReducer>;

export let store = createStore(rootReducer);