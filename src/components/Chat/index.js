import React from "react";
import styles from './Chat.module.css'
import UsersList from "./ChatLIst";
import MessagesLst from "./MessagesList";

const Dialogs = () => {

    return(
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                <UsersList/>
            </div>
            <div className={styles.messages}>
                <MessagesLst/>
            </div>
        </div>
    )
};


export default Dialogs;
