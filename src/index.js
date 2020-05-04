import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Popup from './Popup';
import Input from './Input';

ReactDOM.render(
  <React.StrictMode>
    <Popup />
    <Input />
  </React.StrictMode>,
  document.getElementById('root')
);
