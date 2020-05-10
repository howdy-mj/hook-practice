import React, { useState, useEffect } from "react";

const LectureuseEffect = () => {
  const sayHello = () => console.log('hello');
  const [number, setNumber] = useState(0);
  const [aNumber, setANumber] = useState(0);
  useEffect(sayHello, [number]);
  return (
    <div className='LectureuseEffect'>
      <h1>useEffect</h1>
      <p>오른쪽 왼쪽 버튼이 서로 다른 number +1 하기</p>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setANumber(aNumber + 1)}>{aNumber}</button>
      
      
    </div>
  );
};

export default LectureuseEffect;
