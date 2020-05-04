import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Popup from './Popup';
import Input from './Input';
import PlusMinus from "./PlusMinus"

ReactDOM.render(
  <React.StrictMode>
    <Popup />
    <Input />
    <PlusMinus />
  </React.StrictMode>,
  document.getElementById('root')
);
