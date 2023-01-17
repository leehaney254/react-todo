import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoContainer from './functionalBased/components/TodoContainer';
import About from './functionalBased/pages/About';
import NotMatch from './functionalBased/pages/NotMatch';
import Navbar from './functionalBased/components/Navbar';

import "././functionalBased/App.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)