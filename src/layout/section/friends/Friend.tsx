import React from "react";

export type FriendPropsType = {
  id: number;
  name: string;
};

export const Friend = (props: FriendPropsType) => {
  return (
    <div>{props.name}</div>
  );
};
