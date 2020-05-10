import React, { useState, useEffect } from "react";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }

  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

const UseNotification = () => {
  const trigerNoti = useNotification("Hello, there!", {
    body: "don't know why",
  });
  return (
    <div className="UseNotification">
      <h1>UseNotification</h1>
      <p>Notification API 사용</p>
      <button onClick={trigerNoti}>Hey</button>
    </div>
  );
};

export default UseNotification;
