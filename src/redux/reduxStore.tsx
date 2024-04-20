import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {feedsReducer} from "./feedsReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  feedsPage: feedsReducer,
  usersPage: usersReducer,
  auth: authReducer
});

export type AppStoreType = typeof store;
export type AppStateType = ReturnType<typeof rootReducer>;

export let store = createStore(rootReducer);