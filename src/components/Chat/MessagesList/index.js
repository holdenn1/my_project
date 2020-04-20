import React, {Component} from 'react';
import {loadJson} from "./../../../loadJson";
import styles from '../ChatLIst/ChatList.module.scss'
import Messages from "../Messages";



class MessagesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            isFetching: true,
            error: null,
        }
    }

    componentDidMount() {
        this.setState({
            isFetching: true,
        });

        loadJson('./messages.json')
            .then(data => {
                this.setState({
                    messages: data,
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

    renderMessages = () => {
        const { messages } = this.state;
        return messages.map( message => (
            <li className={styles.list} key={message.id}>

                    <Messages  message={message}/>

            </li>
        ) );
    };

    render () {
        return(
            <ol>
                {
                    this.renderMessages()
                }
            </ol>
        );
    }
}

export default MessagesList;
