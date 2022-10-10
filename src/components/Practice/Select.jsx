import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import getRandomPhoto from '../../backend/getRandomPhoto';

import "../../App.css";
import "./Practice.css";
import bgImage1 from "../../assets/img/korea-bg-1.jpg";

const Select = () => {
    const navigate = useNavigate();
    const [photo, setPhoto] = useState(bgImage1);

    useEffect(() => {
        getRandomPhoto().then(res => setPhoto(res));
    }, [])

    return (
        <div className="App-header" style={{ backgroundImage: `url(${photo})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center" }}>

            <div className="select-card" onClick={() => navigate('/practice/1')}>
                <p className="practice-text">Level 1 - Legacy App Data</p>
            </div>

            <div className="select-card" onClick={() => navigate('/practice/2')}>
                <p className="practice-text">Level 2 - TTMIK Level 5</p>
            </div>
                
        </div>
    )
}

export default Select;
