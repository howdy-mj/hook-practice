import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./InputPractice.css";

function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };

  return { value, onChange };
}

function useFetch(url) {
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState("");

  const callUrl = async () => {
    try {
      const { data } = await Axios.get(url);
      // throw Error();
      setPayload(data);
    } catch {
      setError("ㅠㅠ");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    callUrl();
  }, [callUrl]);

  return { payload, loading, error };
}

function InputPractice() {
  const name = useInput("");
  // console.log(name)
  const { payload, loading, error } = useFetch("https://aws.random.cat/meow");
  return (
    <div className='InputPractice'>
      <h1>Use Hooks</h1>
      <br />
      <input {...name} placeholder="What's your name" />
      <br />
      {loading && <span>loading your cat</span>}
      {!loading && error && <span>{error}</span>}
      {!loading && payload && <img src={payload.file} alt='' width='250px' />}
    </div>
  );
}

export default InputPractice;
