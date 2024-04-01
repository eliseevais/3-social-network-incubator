import React from "react";
import {Styles} from "./Users_Styles";
import UserPhoto from "../../accets/img/user.png"
import {UsersPagePropsType} from "./UsersContainer";
import axios from "axios";

export const Users = (props: UsersPagePropsType) => {

  let getUsers = () => {
    if (props.usersPage.users.length === 0) {

      axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
          props.setUsers(response.data.items)
        })
    }
  }

  return (
    <div>
      <button onClick={getUsers}>Get users</button>
      {
        props.usersPage.users.map(u => <Styles.UserWrapper key={u.id}>
            <Styles.PhotoAndButton>
              <Styles.UserAvatar src={
                u.photos.small !== null
                  ? u.photos.small
                  : UserPhoto}/>
              <div>
                {
                  u.followed
                    ? <Styles.ButtonFollowUnfollow
                      onClick={() => props.unfollow(u.id)}>
                      Unfollow
                    </Styles.ButtonFollowUnfollow>
                    : <Styles.ButtonFollowUnfollow
                      onClick={() => props.follow(u.id)}>
                      Follow
                    </Styles.ButtonFollowUnfollow>
                }
              </div>
              {/*<Styles.ButtonFollowUnfollow>*/}
              {/*  Follow*/}
              {/*</Styles.ButtonFollowUnfollow>*/}
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