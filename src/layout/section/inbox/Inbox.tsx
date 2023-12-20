import React from "react";
import {Styles} from "./Inbox_Styles";
import {Container} from "../../../components/Container_Styles";
import {NavLink} from "react-router-dom";

type InboxPropsType = {}
export const Inbox = (props: InboxPropsType) => {
  return (
    <Styles.Inbox>
      <div>
        <Styles.Dialog>
          <NavLink to='/inbox/1'>Dmitry</NavLink>
        </Styles.Dialog>

        <Styles.Dialog>
          <NavLink to='/inbox/2'>Ekaterina</NavLink>
        </Styles.Dialog>

        <Styles.Dialog>
          <NavLink to='/inbox/3'>Maria</NavLink>
        </Styles.Dialog>

        <Styles.Dialog>
          <NavLink to='/inbox/4'>Olga</NavLink>
        </Styles.Dialog>

        <Styles.Dialog>
          <NavLink to='/inbox/5'>Maxim</NavLink>
        </Styles.Dialog>
      </div>
      <div>
        <Styles.Message>Hello, my friend!</Styles.Message>
        <Styles.Message>How are you doing?</Styles.Message>
        <Styles.Message>Would you like to go to the cinema?</Styles.Message>
      </div>
    </Styles.Inbox>
  )
}