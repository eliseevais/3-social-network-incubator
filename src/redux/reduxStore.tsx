import {combineReducers, createStore} from "redux";
import {myPostsPageReducer} from "./myPostsPageReducer";
import {inboxPageReducer} from "./inboxPageReducer";
import {feedsPageReducer} from "./feedsPageReducer";

let reducers = combineReducers({
  myPostsPage: myPostsPageReducer,
  inboxPage: inboxPageReducer,
  feedsPage: feedsPageReducer
});

export type AppStoreType = typeof store;
export type RootState = ReturnType<typeof reducers>;

export let store = createStore(reducers);
