
// import ReactDOM from 'react-dom/client';
// import './index.css';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

//import App from './components/App';
import React from "react";
import ReactDOM from "react-dom/client";
//import "bulma/css/bulma.min.css";
//import "./index.css";
import App from "./App";
//import Header from "./Views/Header";
//import Footer from "./Views/Footer";


const root = ReactDOM.createRoot(document.getElementById("main"));
root.render(
  <React.StrictMode>
    <div className="section is-small is-fluid has-background-light">
      <App />
    </div>
  </React.StrictMode>
);

   