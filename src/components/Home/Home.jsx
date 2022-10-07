import React from 'react';
import { useNavigate } from "react-router-dom";
// import logo from '../../logo.svg';

import "../../App.css";
import bgImage1 from "../../assets/img/korea-bg-1.jpg";

import { Button } from "@mui/material";

const Home = () => {
  let navigate = useNavigate();

  return (
      <header className="App-header" style={{ backgroundImage: `url(${bgImage1})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center" }}>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="home-text-card">
          <p>Hello There, Welcome to KLT - Mark II</p>
        </div>
        <div className="home-text-card">
          <p>안녕하세요, 한국어 훈련자 예요</p>
        </div>

        <Button variant="contained" size="large" onClick={() => navigate('/select')}>Practice</Button>
        <Button variant="contained" size="large" style={{ marginTop: "1%" }} onClick={() => navigate('/create')}>Create</Button>
      </header>
  )
}

export default Home;