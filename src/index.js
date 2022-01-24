import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Input from "./Input";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Input />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
