import React from "react"
import styles from '../../styles/dazko/DazkoStories.module.css'
import { Carousel, Button, Image, Tabs } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";

const DazkoStories = () => {
    return (
        <section className={styles.storiesContainer}>
            <h4>WATCH OUR STORIES</h4>
            <h1>MEMBERS SUCCESS <span>STORIES</span></h1>

            <div className={styles.videoContainer}>
                <div>
                    <img src="../..//img/dazko-img/success-1.jpg.webp" alt="" />
                    <div className={styles.videoDescrip}>
                        <a href="htttps://vimeo.com/115041822"><PlayCircleOutlined /></a>
                        <div>From 264 lbs to 154 lbs, A Great transformation in my life.</div>
                    </div>
                </div>
                <div>
                    <img src="../..//img/dazko-img/success-2.jpg.webp" alt="" />
                    <div className={styles.videoDescrip}>
                        <a href="htttps://vimeo.com/115041822"><PlayCircleOutlined /></a>
                        <div>From 264 lbs to 154 lbs, A Great transformation in my life.</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DazkoStories;