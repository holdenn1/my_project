import React from "react";
import styles from './MyPosts.module.css'
import Post from "./Post";

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea name="" id="" cols="40" rows="5"></textarea>
                <button>ADD POST</button>
                <button>REMOVE</button>
            </div>
            <div>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}

export default MyPosts;
