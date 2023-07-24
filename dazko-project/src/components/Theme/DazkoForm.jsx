import React from 'react';
import { Button, Form, Input, Space } from 'antd';
import { TwitterOutlined, FacebookOutlined, InstagramOutlined, ArrowRightOutlined } from "@ant-design/icons";
import styles from '../../styles/dazko/DazkoForm.module.css'

const DazkoForm = () => {
    return (
        <section className={styles.formSection}>
            <div>
                <img src=" ../..//img/dazko-img/bg_4.jpg.webp" alt="" />
            </div>
            <div className={styles.formContent}>
                <h3>GET YOUR BODY MAX INDEX</h3>
                <h1>WHAT IS YOUR <span>BMI</span></h1>
                <div className={styles.standardBtn}><Button>Standard</Button><Button>Metric</Button> </div>
                <div className={styles.formContainer}>
                    <Form layout='vertical'>
                        <h4>YOUR HEIGHT</h4>
                        <div className={styles.heightInput} >

                            <Form.Item  >
                                <Input placeholder='Feet' className={styles.heightItem} />
                            </Form.Item>
                            <Form.Item >
                                <Input placeholder='Inches' className={styles.heightItem} />
                            </Form.Item>

                        </div>
                        <h4>YOUR WEIGHT</h4>
                        <div>
                            <Form.Item  >
                                <Input placeholder='Feet' className={styles.weightItem} />
                            </Form.Item>
                        </div>
                        <div className={styles.computeBtn}>
                            <Button>COMPUTE BMI</Button>
                            <Button>Pounds</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </section>
    )
}

export default DazkoForm