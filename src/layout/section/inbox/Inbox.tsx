import React from "react";
import {Styles} from "./Inbox_Styles";
import {Container} from "../../../components/Container_Styles";

type InboxPropsType = {}
export const Inbox = (props: InboxPropsType) => {
  return (
    <Styles.Inbox>
      <div>
        <Styles.Dialog>Dmitry</Styles.Dialog>
        <Styles.Dialog>Ekaterina</Styles.Dialog>
        <Styles.Dialog>Maria</Styles.Dialog>
        <Styles.Dialog>Olga</Styles.Dialog>
        <Styles.Dialog>Maxim</Styles.Dialog>
      </div>
      <div>
        <Styles.Message>Hello, my friend!</Styles.Message>
        <Styles.Message>How are you doing?</Styles.Message>
        <Styles.Message>Would you like to go to the cinema?</Styles.Message>
      </div>
    </Styles.Inbox>
  )
}