import React, { useState, useEffect, useRef } from "react";

const useFullScreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };
  return { element, triggerFull, exitFull };
};

const UseFullScreen = () => {
  const onFulls = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullScreen(onFulls);
  return (
    <div className="UseFullScreen">
      <h1>UseFullScreen</h1>
      <div ref={element}>
        <img
          src="https://ichef.bbci.co.uk/images/ic/1200x675/p068v085.jpg"
          alt=""
        />
        <button onClick={exitFull}>Exit FullScreen</button>
      </div>
      <button onClick={triggerFull}>Make FullScreen</button>
    </div>
  );
};

export default UseFullScreen;
