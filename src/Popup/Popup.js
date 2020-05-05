import React, { createRef, useEffect } from 'react';
import './Popup.css';

function useClickOutside(fn) {
  const ref = createRef();
  const handleClick = (e) => {
    if(!ref.current.contains(e.target)) {
      fn();
    }
  }
  useEffect( () => {
    document.addEventListener("click", handleClick)
  }, [handleClick])
  return ref;
}

function Popup() {
  const onClickOutside = () => {
    console.log('outsidee')
  }
  const ref = useClickOutside(onClickOutside);
  return (
    <div className="App">
      <div ref={ref}>
        <h1>Hello MJ</h1>
        <h2>This should be a popup</h2>
      </div>
      <input type="text" />
    </div>
  );
}

export default Popup;
