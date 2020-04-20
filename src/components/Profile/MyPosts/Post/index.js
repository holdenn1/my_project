import React from "react";
import styles from "./Post.module.scss"





const Post = (props) => {

    return(
        <div>
            <img className={styles.avatar} src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt=""/>
            <span>{props.message}</span>
            <br/>
            <span>like{props.like}</span>
        </div>
    )
};


export default Post
