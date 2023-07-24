import React from 'react';
import { Carousel, Button, Image, Tabs } from "antd";
import { TwitterOutlined, FacebookOutlined, InstagramOutlined, ArrowRightOutlined } from "@ant-design/icons";
import styles from '../../styles/dazko/DazkoTestimonial.module.css'


const DazkoTestimonial = () => {
    const carouselDetail = [{
        para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        img: "../..//img/dazko-img/person_1.jpg.webp",

    },
    {
        para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        img: "../..//img/dazko-img/person_2.jpg.webp",

    },
    {
        para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        img: "../..//img/dazko-img/person_3.jpg.webp",

    },
    ]
    const responsiveCarouselDetail = [{
        para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        img: "../..//img/dazko-img/person_1.jpg.webp",

    },
    {
        para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        img: "../..//img/dazko-img/person_2.jpg.webp",

    },
    {
        para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        img: "../..//img/dazko-img/person_3.jpg.webp",

    },
    {
        para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        img: "../..//img/dazko-img/person_1.jpg.webp",

    },
    {
        para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        img: "../..//img/dazko-img/person_2.jpg.webp",

    },
    {
        para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        img: "../..//img/dazko-img/person_3.jpg.webp",

    },
    ]
    return (
        <section className={styles.testimonialSection}>
            <h4>TESTIMONIAL</h4>
            <h1>HAPPY PEOPLE</h1>
            <div className={`${styles.carouselContainer} testimonial-carousel`}>
                <Carousel autoplay>
                    <div className={`${styles.carouselWrapper} `}>
                        {carouselDetail.map((profile, i) => {
                            return (
                                <div className={styles.carouselProWraper}>
                                    <div className={styles.headerComa}><img src="../..//img/dazko-img/213175_f10d_icon.png" alt="" /></div>
                                    <div key={i} className={`${styles.profileConatiner} `}>

                                        <p>{profile.para}</p>
                                        <div>
                                            <img src={profile.img} alt="" />
                                            <div>
                                                <h3>ROGER SCOTT</h3>
                                                <p>MARKETING MANAGER</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className={`${styles.carouselWrapper} `}>
                        {carouselDetail.map((profile, i) => {
                            return (
                                <div className={styles.carouselProWraper}>
                                    <div className={styles.headerComa}><img src="../..//img/dazko-img/213175_f10d_icon.png" alt="" /></div>
                                    <div key={i} className={`${styles.profileConatiner} `}>

                                        <p>{profile.para}</p>
                                        <div>
                                            <img src={profile.img} alt="" />
                                            <div>
                                                <h3>ROGER SCOTT</h3>
                                                <p>MARKETING MANAGER</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                </Carousel>

            </div>
            <div className={`${styles.responsiveCarouselContainer} testimonial-carousel`}>
                <Carousel autoplay>


                    {responsiveCarouselDetail.map((profile, i) => {
                        return (
                            <div className={`${styles.carouselWrapper} `}>
                                <div>
                                    <div className={styles.headerComa}><img src="../..//img/dazko-img/213175_f10d_icon.png" alt="" /></div>
                                    <div key={i} className={`${styles.profileConatiner} `}>

                                        <p>{profile.para}</p>
                                        <div>
                                            <img src={profile.img} alt="" />
                                            <div>
                                                <h3>ROGER SCOTT</h3>
                                                <p>MARKETING MANAGER</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}


                </Carousel>

            </div>
        </section>
    )
}
export default DazkoTestimonial