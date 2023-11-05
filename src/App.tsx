import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/Homescreen";
import { Container } from "react-grid-system";
import styled from "styled-components/macro";

function App() {
  return (
    // <StyledContainer fluid>
    <Home />
    // </StyledContainer>
  );
}

export default App;
