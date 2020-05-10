import React, { useState, useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
    // if (typeof duration !== "number" || typeof delay !== "number") {
    //     return;
    // }
    const element = useRef();
    useEffect( () => {
        if(element.current) {
            const { current } = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`
            current.style.opacity = 1;
        }
    }, [delay, duration])
    return {ref: element, style: {opacity:0}};
}

const UseFadeIn = () => {
    const fadeInP = useFadeIn(3, 1);
    const fadeInH3 = useFadeIn(5, 2);
    return (
        <div className="UseFadeIn">
            <h1>UseFadeIn</h1>
            <p {...fadeInP}>서서히 나타나는 효과</p>
            <h3 {...fadeInH3}>신기방기</h3>
        </div>
    )
}

export default UseFadeIn;