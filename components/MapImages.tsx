import React, {FC, useCallback} from 'react';
import {Data} from "@/pages/Data";

interface props {
    activeIndex: number,
    styles: string,
    setActiveIndex?: (value: number) => void,

}

const MapImages: FC<props> = ({activeIndex, styles, setActiveIndex}) => {
    const getIndex = useCallback((index: number) => {
        setActiveIndex && setActiveIndex(index)
    }, [setActiveIndex])
    return (
        <>
            {
                Data.map((item, index) => (
                    <figure
                        onClick={() => setActiveIndex ? getIndex(index) : null}
                        key={index}
                        className={activeIndex === index ? styles : undefined}>
                        <img src={item} alt={item}/>
                    </figure>
                ))
            }
        </>
    );
};

export default MapImages;
