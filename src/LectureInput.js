import React, { useState, useEffect } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const LectureInput = () => {
  //   const maxLength = (value) => value.length <= 10;
  const maxLength = (value) => !value.includes("@");
  const name = useInput("Ms.", maxLength);
  return (
    <div className='InputPractice'>
      <h1>Pratice useInput</h1>
      <input className='Name' {...name} />
    </div>
  );
};

export default LectureInput;
