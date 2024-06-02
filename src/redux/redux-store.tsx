import {applyMiddleware, combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {feedsReducer} from './feeds-reducer';
import {usersReducer} from './users-reducer';
import {authReducer} from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  feedsPage: feedsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer
});

export type AppStoreType = typeof store;
export type AppStateType = ReturnType<typeof rootReducer>;

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));