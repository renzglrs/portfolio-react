import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AOS from "aos";
import 'aos/dist/aos.css'; // You can also use <link> for styles


// Import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Initialize AOS
AOS.init();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

