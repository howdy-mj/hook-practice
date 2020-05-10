import React, { useState, useEffect } from "react";
import defaultAxios from "axios";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);
  //   if (!opts.url) {
  //     return;
  //   }
  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };
  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [axiosInstance, opts, state, trigger]);
  return { ...state, refetch };
};

const UseAxios = () => {
  const { loading, error, data, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  console.log(
    `Loading: ${loading}\nError:${error}\nData:${JSON.stringify(data)}`
  );
  return (
    <div className="UseAxios">
      <h1>useAxios</h1>
      <p>YTS 데이터 가져오기(콘솔 확인)</p>
      <h2>{data && data.status}</h2>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refecth</button>
    </div>
  );
};

export default UseAxios;
