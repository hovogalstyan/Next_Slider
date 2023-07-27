import styles from '@/styles/Home.module.css'
import React, {useCallback, useState} from "react";
import {Color, Size, Data} from "@/pages/Data";
import MapImages from "@/components/MapImages";

export default function Home() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeColorIndex, setActiveColorIndex] = useState<number | null>(null);
    const [activeSizeIndex, setActiveSizeIndex] = useState<number | null>(null);
    const handelScrollLeft = useCallback(() => {
        let scrolls = window.document.querySelector('#scrolls')
        scrolls && scrolls.scrollBy(-120, 0)
    }, [])
    const handelScrollRight = useCallback(() => {
        let scrolls = window.document.querySelector('#scrolls')
        scrolls && scrolls.scrollBy(120, 0)
    }, [])
    return (
        <div className={styles.Home}>
            <div className={styles.wrapper}>
                <div className={styles.slid_container}>
                    <div className={styles.left_block}>
                        <div className={styles.top_slid_row}>
                            <MapImages activeIndex={activeIndex} styles={styles.active_top_img}/>
                        </div>
                        <ul className={styles.point_block}>
                            {
                                Data.map((_, index) => (
                                    <li
                                        onClick={() => setActiveIndex(index)}
                                        className={index === activeIndex ? styles.active_point : undefined}
                                        key={index}/>
                                ))
                            }
                        </ul>
                    </div>
                    <div className={styles.right_block}>
                        <h1>Men's casual running shoes, breathable running...</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of
                            type and scrambled it to make a type specimen book. It has survived not only five centuries,
                            but also the leap into electronic typesetting, remaining essentially unchanged. It was
                            popularised in the 1960s with the release of Letraset sheets containing:</p>
                        <ul className={styles.Color_block}>
                            {
                                Color.map((item, index) => (
                                    <li key={index}
                                        className={activeColorIndex === index ? styles.active_color : undefined}
                                        style={{background: item}}
                                        onClick={() => setActiveColorIndex(index)}/>
                                ))
                            }
                        </ul>
                        <ul className={styles.Size_block}>
                            {
                                Size.map((item, index) => (
                                    <li onClick={() => setActiveSizeIndex(index)}
                                        key={index}
                                        className={activeSizeIndex === index ? styles.active_size : undefined}>{item}</li>
                                ))
                            }
                        </ul>
                        <div className={styles.bottom_slid_row_container}>
                            <div id={'scrolls'} className={styles.bottom_slid_row}>
                                <MapImages activeIndex={activeIndex}
                                           styles={styles.active_bottom_images}
                                           setActiveIndex={setActiveIndex}
                                />
                            </div>
                                <div className={styles.left_icon} onClick={handelScrollLeft}>
                                    <span></span>
                                </div>
                                <div onClick={handelScrollRight} className={styles.right_icon}>
                                    <span></span>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
