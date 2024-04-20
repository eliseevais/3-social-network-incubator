import React from "react";
import {Feed} from "./Feed";
import {  FeedType} from "../../redux/storeAllPropsType";

type FeedsDataPropsType = {
  feeds: Array<FeedType>
};

export const Feeds = (props: FeedsDataPropsType) => {

  let friendsElements = props.feeds.map(feed =>
    <Feed key={feed.id}
            id={feed.id}
            text={feed.text}
    />)

  return (
    <div>
      {friendsElements}
    </div>
  )
}