import React from "react";

import {FeedType} from "../../redux/store-all-props-types";

export const Feed = (props: FeedType) => {
  return (
    <div>{props.text}</div>
  );
};
