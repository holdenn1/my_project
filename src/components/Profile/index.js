import React from "react";
import styles from './Profile.module.css'
import MyPosts from "./MyPosts";

const Profile = () => {
    return(
        <div className={styles.content}>
            <div>
                <img className={styles.contentImg} src="https://images.wallpaperscraft.ru/image/zvezdnoe_nebo_oblaka_zakat_120716_1920x1080.jpg" alt=""/>
            </div>
            <div>
                ava
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;
