import React, {Component} from "react";
import styles from './MyPosts.module.scss'
import {loadJson} from "../../../loadJson";

class MyPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isFetching: true,
            error: null,
        }
    }

    componentDidMount() {
        this.setState({
            isFetching: true,
        });

        loadJson('./posts.json')
            .then(data => {
                this.setState({
                    posts: data,
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

    renderPosts = () => {
        const {posts} = this.state;
        return posts.map(post => (
            <ul>
                <img className={styles.avatar} src={post.src} alt=""/>
                <li key={post.id}>{post.like}</li>
                <li key={post.id}>{post.message}</li>
            </ul>
        ));
    };

    render() {
        return (
            <div>
               <span>my posts</span>
                    <ol>
                        {
                            this.renderPosts()
                        }
                    </ol>
            </div>
        );
    }
}

export default MyPosts;
