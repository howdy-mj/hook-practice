import React, { useState, useEffect } from "react";

const useBeforeLeave = (onBefore) => {
    // if(typeof onBefore !== "function") {
    //     return;
    // }
    const handle = (event) => {
        const { clientY } = event;
        if (clientY <= 0) {
            onBefore();
        }
    }
    useEffect(() => {
        document.addEventListener("mouseleave", handle);
        return () => document.removeEventListener("mouseleave", handle);
    }, [handle])
}

const UseBeforeLeave = () => {
    const begForLife = () => console.log("don't leave");
    useBeforeLeave(begForLife);
    return (
        <div className="UseBeforeLeave">
            <h1>useBeforeLeave</h1>
            <p>마우스가 window밖으로 나가면 console 찍게하기</p>
        </div>
    )
}

export default UseBeforeLeave;