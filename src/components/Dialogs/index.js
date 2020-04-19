import React from "react";
import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={styles.dialog}>
            <NavLink activeClassName={styles.link}
                     to={path}>{props.name}
            </NavLink>
        </div>
    )
};

const Message = (props) => {
    return(
        <div className={styles.message}>
            {props.message}
        </div>
    )
};

const Dialogs = () => {

    let data = [
        {
            id: 1,
            name: "Helen"
        },
        {
            id: 2,
            name: "Victor"
        },
        {
            id: 3,
            name: "John"
        },
        {
            id: 4,
            name: "Java"
        },
        {
            id: 5,
            name: "Ben"
        },

    ];

    let DialogData = data.map(data => <Dialog name={data.name} id={data.id}/>);

    let messageData = [
        {
            id:1,
            message: "hi"
        },
        {
            id:2,
            message: "Privet"
        },
        {
            id:3,
            message: "REACT!!!"
        }
    ];

    let messages = messageData.map(message => <Message message={message.message}/>);

    return(
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                {DialogData}
            </div>
            <div className={styles.messages}>
                {messages}
            </div>
        </div>
    )
};


export default Dialogs;
