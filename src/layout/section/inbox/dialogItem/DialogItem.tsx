import {Styles} from "../Inbox_Styles";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemPropsType = {
  id: string;
  name: string;
};

export const DialogItem = (props: DialogItemPropsType) => {
  let path = '/inbox/' + props.id;
  return (
    <Styles.Dialog>
      <NavLink className={(isActive) => isActive ? 'isActive' : ''}
               to={path}>{props.name}</NavLink>
    </Styles.Dialog>
  )
};