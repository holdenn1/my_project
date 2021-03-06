import React, {Component} from 'react';
import {loadJson} from "./../../../loadJson";
import styles from './ChatList.module.scss'
import {NavLink} from "react-router-dom";



class ChatList extends Component {
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
                <NavLink className={styles.chatContainer} activeClassName={styles.active} to={`${"/chat/"}` + `${user.id}`}>
                    <img className={styles.photo} src={user.src} alt=""/>
                    <ul>
                        <li className={styles.name}>
                            {user.name}
                        </li>
                    </ul>
                </NavLink>
            </li>
        ) );
    };

    render () {
        return(
            <div>
            <ol>
                {
                    this.renderUsers()
                }
            </ol>
            </div>
        );
    }
}

export default ChatList;
