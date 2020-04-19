import React, {Component} from "react";
import styles from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import Message from "../Messages";
import Dialogs from "../index";

const data = [
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
        id: "5",
        name: "Ben"
    },

];



const Users = (props) => {
    let dataUsers = [
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

    let dialogData = dataUsers.map(data => <Users name={data.name} id={data.id}/>);

        let path = "/dialogs/" + props.id;
        return (
            <div className={styles.dialog}>
                <NavLink activeClassName={styles.link}
                         to={path}>{dialogData}
                </NavLink>
            </div>
        )
    };

export default Users;
