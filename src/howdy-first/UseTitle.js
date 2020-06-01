import React, { useState, useEffect } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerHTML = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

const UseTitle = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 3000);
  return (
    <div className="UseTitle">
      <h1>useTitle</h1>
      <p>HTML 제목 바꾸기</p>
    </div>
  );
};

export default UseTitle;
