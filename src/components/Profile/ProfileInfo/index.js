import React from "react";
import styles from './ProfileInfo.module.scss'

const ProfileInfo = () => {
    return(
        <div>
            <div>
                <img className={styles.contentImg} src="https://images.wallpaperscraft.ru/image/zvezdnoe_nebo_oblaka_zakat_120716_1920x1080.jpg" alt=""/>
            </div>
            <div>
                ava
            </div>
        </div>
    )
}

export default ProfileInfo;
