import React from "react";
import styles from './MyPosts.module.css'
import Post from "./Post";

const MyPosts = () => {

    let data = [
        {
            id:1,
            message: "Hi, how are yoy?",
            like: 15
        },
        {
            id:3,
            message: "It's my post!",
            like: 25
        }
    ];

    let posts = data.map( post => <Post id={post.id} message={post.message} like={post.like}/>);

    return (
        <div>
            My post
            <div>
                <textarea name="" id="" cols="25" rows="5"></textarea>
                <button>ADD POST</button>
                <button>REMOVE</button>
            </div>
            <div>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;
