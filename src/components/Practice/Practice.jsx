import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getRandomSaying from "../../backend/db";
import getRandomPhoto from '../../backend/getRandomPhoto';

import "../../App.css";
import "./Practice.css";
import bgImage1 from "../../assets/img/korea-bg-1.jpg";

import { Button } from "@mui/material";

const Practice = () => {
    let { level } = useParams();
    
    const [saying, setSaying] = useState("Term - Saying - Expression");
    const [answer, setAnswer] = useState("Answer - In - Korean");
    const [photo, setPhoto] = useState(bgImage1);

    const [showAnswer, setShowAnswer] = useState(false);

    useEffect(() => {
        getRandomSaying(level).then(res => {
            setSaying(res.english);
            setAnswer(res.korean);
        })
    });

    async function refresh() {
        getRandomSaying(level).then(res => {
            setSaying(res.english);
            setAnswer(res.korean);
        })
    }
    
    return (
        <div className="App-header" style={{ backgroundImage: `url(${photo})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center" }}>

            <div className="practice-text-card">
                <p className="practice-text">{saying}</p>
            </div>

            {
                showAnswer === true ?
                    <div className="practice-text-card">
                        <p className="practice-text">{answer}</p>
                    </div>
                :
                    null
            }

            <Button variant="contained" size="large" onClick={() => setShowAnswer(true)}>Check</Button>
            <Button variant="contained" size="large" style={{ marginTop: "1%" }} onClick={async () => {
                getRandomPhoto().then(res => setPhoto(res));
                setShowAnswer(false);
                await refresh();
            }}>Next</Button>
        </div>
    )
}

export default Practice;
