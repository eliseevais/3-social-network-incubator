import React from "react";

import {FeedType} from "../../redux/storeAllPropsType";

export const Feed = (props: FeedType) => {
  return (
    <div>{props.text}</div>
  );
};
