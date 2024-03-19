import React from "react";
import {Styles} from "./Users_Styles";
import Dmitry from "../../accets/img/Dmitry.jpg";
import Ekaterina from "../../accets/img/Ekaterina.jpg";
import Maria from "../../accets/img/Maria.jpg";
import Olga from "../../accets/img/Olga.jpg";
import Maxim from "../../accets/img/Maxim.jpg";
import {UsersPagePropsType} from "./UsersContainer";

export const Users = (props: UsersPagePropsType) => {

  if (props.usersPage.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        name: 'Dmitry',
        img: Dmitry,
        followed: true,
        status: 'I am looking for a job',
        location: {city: 'Moscow', country: 'Russia'}
      },
      {
        id: 2,
        name: 'Ekaterina',
        img: Ekaterina,
        followed: false,
        status: 'I like hockey',
        location: {city: 'Kiev', country: 'Ukraine'}
      },
      {
        id: 3,
        name: 'Maria',
        img: Maria,
        followed: true,
        status: 'Beautiful life',
        location: {city: 'Minsk', country: 'Belarus'}
      },
      {
        id: 4,
        name: 'Olga',
        img: Olga,
        followed: false,
        status: 'I love my job',
        location: {city: 'Moscow', country: 'Tula'}
      },
      {
        id: 5,
        name: 'Maxim',
        img: Maxim,
        followed: false,
        status: 'Next month I will travel to Austria',
        location: {city: 'Egypt', country: 'Cairo'}
      }
    ])
  }

  console.log(props.usersPage.users)

  return (
    <div>
      {
        props.usersPage.users.map(u => <Styles.UserWrapper key={u.id}>
            <Styles.PhotoAndButton>
              <Styles.UserAvatar src={u.img}/>
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