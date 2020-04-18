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
    return(
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                <Dialog name="Helen" id="1"/>
                <Dialog name="Victor" id="2"/>
                <Dialog name="John" id="3"/>
                <Dialog name="Java" id="4"/>
                <Dialog name="Ben" id="5"/>
            </div>
            <div className={styles.messages}>
                <Message message="Hi"/>
                <Message message="Privet"/>
                <Message message="Ok"/>
            </div>
        </div>
    )
};


export default Dialogs;
