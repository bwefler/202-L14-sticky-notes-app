// import React from "react";
// import ReactDOM from "react-dom";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import "./index.css";
import './styles.css';
import App from "./App.jsx";

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)