import React, { useState } from 'react';
import { Carousel, Button, Image, Tabs } from "antd";
import { TwitterOutlined, FacebookOutlined, InstagramOutlined, ArrowRightOutlined } from "@ant-design/icons";
import styles from '../../styles/dazko/DazkoWorkOut.module.css'

const DazkoWorkOut = () => {
    const [isActive1, setActive1] = useState(false)
    const [isActive2, setActive2] = useState(false)
    const [isActive3, setActive3] = useState(false)

    const onHover = (index) => {
        console.log(index)
        if (index == 0) {
            setActive1(true)
        } else if (index == 1) {
            setActive2(true)
        } else if (index == 2) {
            setActive3(true)
        }
        console.log(isActive1)
        console.log(isActive2)
        console.log(isActive3)

    }
    const workOut = [

        {
            img: "../..//img/dazko-img/classes-1.jpg.webp",
            descrip: "BODY BUILDING",
            price: "100$",
            active: isActive1
        },
        {
            img: "../..//img/dazko-img/classes-2.jpg.webp",
            descrip: "WEIGHT LIFTING",
            price: "100$",
            active: isActive2
        },
        {
            img: "../..//img/dazko-img/classes-3.jpg.webp",
            descrip: "CARDIO",
            price: "100$",
            active: isActive3
        },
    ]
    return (
        <section className={styles.workOutSection}>
            <h4>OUR CLASSES</h4>
            <h1><span>DAZKO</span> WORKOUT CLASSES</h1>
            <div>
                {workOut.map((work, i) => {
                    return (
                        <div key={i} className={styles.workOutClasses} onMouseOver={() => {
                            onHover(i)
                        }} onMouseLeave={() => {
                            setActive1(false)
                            setActive2(false)
                            setActive3(false)
                        }}>
                            <img src={work.img} alt="" />
                            <div className={`${styles.workOutClassesDescription} ${work.active ? `${styles.descripActive}` : `${styles.descripInActive}`}`}>{work.descrip} </div>
                            <div className={`${styles.workOutClassesPrice} ${work.active ? `${styles.priceActive}` : `${styles.priceInActive}`}`}>{work.price}</div>
                        </div>
                    )
                })}

            </div>
            <div>
                <a href="">VIEW ALL CLASSES <ArrowRightOutlined /></a>

            </div>
        </section>
    )
}
export default DazkoWorkOut