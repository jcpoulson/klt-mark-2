import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import "../../App.css";
import bgImage1 from "../../assets/img/korea-bg-1.jpg";
import getRandomPhoto from '../../backend/getRandomPhoto';

import { Button } from "@mui/material";

const Home = () => {
  let navigate = useNavigate();

  const [photo, setPhoto] = useState(bgImage1);

    useEffect(() => {
        getRandomPhoto().then(res => setPhoto(res));
    }, [])

  return (
      <header className="App-header" style={{ backgroundImage: `url(${photo})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center" }}>
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
