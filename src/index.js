import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Popup from "./Popup/Popup";
import InputPractice from "./InputPractice/InputPractice";
import PlusMinus from "./PlusMinus/PlusMinus";
import LectureInput from "./LectureInput";

ReactDOM.render(
  <React.StrictMode>
    {/* <Popup /> */}
    {/* <InputPractice /> */}
    {/* <PlusMinus /> */}
    <LectureInput />
  </React.StrictMode>,
  document.getElementById("root")
);
