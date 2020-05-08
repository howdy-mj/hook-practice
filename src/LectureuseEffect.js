import React, { useState, useEffect } from "react";

const LectureuseEffect = () => {
  const sayHello = () => console.log('hello');
  const [number, setNumber] = useState(0);
  const [aNumber, setANumber] = useState(0);
  useEffect(sayHello, [number]);
  return (
    <div className='LectureuseEffect'>
      <h1>useEffect</h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setANumber(aNumber + 1)}>{aNumber}</button>
      
      
    </div>
  );
};

export default LectureuseEffect;
