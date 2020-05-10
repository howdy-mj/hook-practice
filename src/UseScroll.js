import React, { useState, useEffect } from "react";

const useScroll = () => {
    const [state, setState] = useState({
        x: 0,
        y: 0
    })
    const onScroll = () => {
        console.log("y", window.scrollY, "x", window.scrollX);
        setState({y: window.scrollY, x: window.scrollX})
    }
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    })
    return state;
}

const UseScroll = () => {
    const {y} = useScroll();
    return(
        <div className="UseScroll" style={{height: "1000vh"}}>
            <h1>UseScroll</h1>
            <p style={{position: "fixed", color: y > 100 ? "red" : "blue"}}>마우스가 움직임에 따라 색상 변경</p>
        </div>
    )
}

export default UseScroll;