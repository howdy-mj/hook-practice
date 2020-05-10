import React, { useState, useEffect, useRef } from "react";

const useClick = (onClick) => {
    const element = useRef();
    useEffect( () => {
        if (element.current) {
            element.current.addEventListener("click", onClick);
        }
        return () => {
            if (element.current) {
                element.current.removeEventListener("click", onClick);
            }
        }
    }, [onClick])
    return element;
}

const UseClick = () => {
    const onClick = () => console.log("sayHello")
    const title = useClick(onClick);
    return (
        <div className="UseClick">
            <h1 ref={title}>UseClick</h1>
            
        </div>
    )
}

export default UseClick;