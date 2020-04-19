import React, {Component} from 'react';
import {loadJson} from "./../../../loadJson";
import Users from "../Users";
import styles from './ChatList.module.css'
import {NavLink} from "react-router-dom";



class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isFetching: true,
            error: null,
        }
    }

    componentDidMount() {
        this.setState({
            isFetching: true,
        });

            loadJson('./users.json')
                .then(data => {
                    this.setState({
                        users: data,
                        isFetching: false,
                    })
                })
                .catch(err => {
                    this.setState({
                        error: err,
                        isFetching: false,
                    })
                })

    }

    renderUsers = () => {
        const { users } = this.state;
        return users.map( user => (
            <li className={styles.list} key={user.id}>
                <NavLink activeClassName={styles.active} to={`${"/chat/"} ${user.id}`}>
                    <Users  user={user}/>
                </NavLink>
            </li>
        ) );
    };

    render () {
        return(
            <ol>
                {
                    this.renderUsers()
                }
            </ol>
        );
    }
}

export default UsersList;
