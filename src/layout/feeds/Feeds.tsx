import React from "react";
import {Feed} from "./Feed";
import {  FeedType} from "../../redux/store-all-props-types";

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