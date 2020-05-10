import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Popup from "./Popup/Popup";
import InputPractice from "./InputPractice/InputPractice";
import PlusMinus from "./PlusMinus/PlusMinus";
import UseInput from "./UseInput";
import UseEffect from "./UseEffect";
import UseTitle from "./UseTitle";
import UseClick from "./UseClick";
import UseConfirm from "./UseConfirm";
import UsePreventLeave from "./UsePreventLeave";
import UseBeforeLeave from "./UseBeforeLeave";
import UseFadeIn from "./UseFadeIn";
import UseNetwork from "./UseNetwork";


ReactDOM.render(
  <React.StrictMode>
    {/* <Popup /> */}
    {/* <InputPractice /> */}
    {/* <PlusMinus /> */}
    {/* <UseInput /> */}
    {/* <UseEffect /> */}
    {/* <UseTitle /> */}
    {/* <UseClick /> */}
    {/* <UseConfirm /> */}
    {/* <UsePreventLeave /> */}
    {/* <UseBeforeLeave /> */}
    <UseFadeIn />
    <UseNetwork />
  </React.StrictMode>,
  document.getElementById("root")
);
