import React from "react";
import styles from './MyPosts.module.css'
import Post from "./Post";

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea name="" id="" cols="25" rows="5"></textarea>
                <button>ADD POST</button>
                <button>REMOVE</button>
            </div>
            <div>
                <Post message='Hi, how are yoy?' like="15"/>
                <Post message="It's my post" like="20"/>
            </div>
        </div>
    )
}

export default MyPosts;
