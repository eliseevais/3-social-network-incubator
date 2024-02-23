import React from "react";
import {FriendPropsType} from "../../../redux/state";
import {Friend} from "./Friend";

type FriendsDataPropsType = {
  friends: Array<FriendPropsType>
};

export const Friends = (props: FriendsDataPropsType) => {

  let friendsElements = props.friends.map(friend =>
    <Friend key={friend.id}
            id={friend.id}
            name={friend.name}
    />)

  return (
    <div>
      {friendsElements}
    </div>
  )
}