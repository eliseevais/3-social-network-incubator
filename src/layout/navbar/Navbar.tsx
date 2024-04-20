import React from "react";
import {Redirect, Route} from "react-router-dom";
import {Music} from "../music/Music";
import {DialogsContainer} from "../dialogs/DialogsContainer";
import {Styles} from "./Navbar_Styles";
import UsersContainer from "../users/UsersContainer";
import ProfileContainer from "../profile/ProfileContainer";

export const Navbar = () => {
  return (
    <Styles.Navbar>

      <Redirect from='/' to='/profile'/>

      <Route path='/profile' render={() => <ProfileContainer/>}/>
      <Route path='/dialogs' render={() => <DialogsContainer/>}/>
      <Route path='/friends' render={() => <UsersContainer/>}/>

      <Route path='/music' render={() => <Music/>}/>

      {/*<Route path='/feeds' render={*/}
      {/*  () => <Feeds feeds={props.state.feedsPage.feeds}/>}/>*/}

    </Styles.Navbar>
  )
}
