import React, { useState, useEffect} from "react";

const usePreventLeave = () => {
    const listner = (event) => {
        event.preventDefault();
        event.returnValue = "";
    }
    const enablePrevent = () => window.addEventListener("beforeunload", listner);
    const disablePrevent = () => window.removeEventListener("beforeunload", listner);

    return { enablePrevent, disablePrevent };
}

const UsePreventLeave = () => {
    const {enablePrevent, disablePrevent} = usePreventLeave();
    return (
        <div className="UsePreventLeave">
            <h1>UsePreventLeave</h1>
            <p>변경사항이 저장되지 않을 수 있습니다.</p>
            <button onClick={enablePrevent}>Protect</button>
            <button onClick={disablePrevent}>Unprotect</button>
        </div>
    )
}

export default UsePreventLeave;