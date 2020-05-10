import React, { useState, useEffect } from "react";

const useNetwork = onChange => {
    const [ status, setStatus ] = useState(navigator.onLine);
    const handleChange = () => {
        if(typeof onChange==="function") {
            onChange(navigator.onLine);
        }
        setStatus(navigator.onLine);
    }
    useEffect( () => {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);
        return () => {
            window.removeEventListener("online", handleChange);
            window.removeEventListener("offline", handleChange);
        }
    } ,[handleChange]);
    return status;
}

const UseNetwork = () => {
    const handleNetworkChange = (online) => {
        console.log(online ? "We just went online" : "We are offline")
    };
    const online = useNetwork(handleNetworkChange);
    return (
        <div className="UseNetwork">
            <h1>UseNetwork</h1>
            <p>{online ? "OnLine" : "OffLine"}</p>
            <p>Network 탭에서 on/offline에 따라 글자 나타나기</p>
        </div>
    )
}

export default UseNetwork;