import React, {ReactNode} from "react";
import {Styles} from "./Users_Styles";
import UserPhoto from "../../accets/img/user.png";
import axios from "axios";
import {UsersPagePropsType} from "./UsersContainer";
import {UserPropsType} from "../../redux/storeAllPropsType";

class UsersC extends React.Component<UsersPagePropsType, {}> {
  componentDidMount() {
    axios.get<{totalCount: number, items: UserPropsType[]}>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        console.log(response.data)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onPageChanged = (pageNumber: number) => {
    console.log('page changed')
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {

    let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return (
      <div>
        <div>
          {pages.map(p => {
            return this.props.currentPage === p
              ? <Styles.SelectedPage
                key={`pagination-page-${p}`}
              >
                {p}</Styles.SelectedPage>
              : <Styles.Page key={`pagination-page-${p}`}
                             onClick={() => {
                               this.onPageChanged(p)
                             }}>{p}</Styles.Page>
          })}
        </div>

        {
          this.props.users.map(u => <Styles.UserWrapper key={u.id}>
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