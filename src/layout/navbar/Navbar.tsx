import React from "react";
import {Redirect, Route} from "react-router-dom";
import ProfileContainer from "../profile/ProfileContainer";
import {Styles} from "./Navbar_Styles";
import UsersContainer from "../users/UsersContainer";
import {Music} from "../music/Music";
import {Login} from "../login/Login";
import DialogsContainer from "../dialogs/DialogsContainer";

export const Navbar = () => {
  return (
    <Styles.Navbar>

      <Redirect from='/' to='/profile'/>

      <Route path='/login' render={() => <Login/>}/>
      <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>

      <Route path='/dialogs' render={() => <DialogsContainer/>}/>
      <Route path='/users' render={() => <UsersContainer />}/>

      <Route path='/music' render={() => <Music/>}/>
      {/*<Route path='/feeds' render={*/}
      {/*  () => <Feeds feeds={props.state.feedsPage.feeds}/>}/>*/}

    </Styles.Navbar>
  )
}
