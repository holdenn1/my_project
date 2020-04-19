import React, {Component} from 'react';
import {loadJson} from "./../../../loadJson";
import Users from "../Users";
import styles from './ChatList.module.css'

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
        setTimeout(() => {
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
        }, 2000);
    }

    renderUsers = () => {
        const { users } = this.state;
        return users.map( user => (
            <li className={styles.list} key={user.id}>
                <Users user={user}/>
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
