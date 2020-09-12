import React from 'react';
import { render as ReactDOMRender } from 'react-dom';
import App from './App';
import './tailwind.output.css';

ReactDOMRender(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
