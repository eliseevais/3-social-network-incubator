import React from "react";
import {Redirect, Route} from "react-router-dom";
import ProfileContainer from "../profile/ProfileContainer";
import {Styles} from "./Navbar_Styles";
import UsersContainer from "../users/UsersContainer";
import {DialogsContainer} from "../dialogs/DialogsContainer";
import {Music} from "../music/Music";
import {Login} from "../login/Login";

export const Navbar = () => {
  return (
    <Styles.Navbar>

      <Route path='/login' render={() => <Login/>}/>

      <Redirect from='/' to='/profile'/>
      <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
      <Route path='/dialogs' render={() => <DialogsContainer/>}/>
      <Route path='/users' render={() => <UsersContainer />}/>

      <Route path='/music' render={() => <Music/>}/>
      {/*<Route path='/feeds' render={*/}
      {/*  () => <Feeds feeds={props.state.feedsPage.feeds}/>}/>*/}

    </Styles.Navbar>
  )
}
