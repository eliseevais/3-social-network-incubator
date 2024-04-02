import React, {ReactNode} from "react";
import {Styles} from "./Users_Styles";
import UserPhoto from "../../accets/img/user.png";
import axios from "axios";
import {UsersPagePropsType} from "./UsersContainer";
import {AppStateType} from "../../redux/reduxStore";

class UsersC extends React.Component<UsersPagePropsType, {}> {
  constructor(props: UsersPagePropsType) {
    super(props);
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }
  render() {
   return (
     <div>
       {
         this.props.usersPage.users.map(u => <Styles.UserWrapper key={u.id}>
             <Styles.PhotoAndButton>
               <Styles.UserAvatar src={
                 u.photos.small !== null
                   ? u.photos.small
                   : UserPhoto}/>
               <div>
                 {
                   u.followed
                     ? <Styles.ButtonFollowUnfollow
                       onClick={() => this.props.unfollow(u.id)}>
                       Unfollow
                     </Styles.ButtonFollowUnfollow>
                     : <Styles.ButtonFollowUnfollow
                       onClick={() => this.props.follow(u.id)}>
                       Follow
                     </Styles.ButtonFollowUnfollow>
                 }
               </div>
             </Styles.PhotoAndButton>
             <Styles.UserPreview>
               <Styles.NameAndStatus>
                 <div>{u.name}</div>
                 <div>{u.status}</div>
               </Styles.NameAndStatus>
               <Styles.Location>
                 <div>{u.location?.country}</div>
                 <div>{u.location?.city}</div>
               </Styles.Location>
             </Styles.UserPreview>

           </Styles.UserWrapper>
         )
       }
     </div>
   )
  }
}

export default UsersC;