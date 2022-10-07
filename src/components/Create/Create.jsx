import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import postSaying from "../../backend/postSaying";
import getRandomPhoto from '../../backend/getRandomPhoto';

import "../../App.css";
import bgImage1 from "../../assets/img/korea-bg-1.jpg";

import { Button, TextField } from "@mui/material";

const Create = () => {
    const navigate = useNavigate();

    const [photo, setPhoto] = useState(bgImage1);
    const [english, setEnglish] = useState('');
    const [korean, setKorean] = useState('');
    const [level, setLevel] = useState('');

    useEffect(() => {
        getRandomPhoto().then(res => setPhoto(res));
    }, [])

    return (
        <header className="App-header" style={{ backgroundImage: `url(${photo})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center" }}>s
            <div className="create-text-field">
                <TextField id="outlined-basic" label="English" variant="outlined" onChange={event => setEnglish(event.target.value)} />
            </div>
            <div className="create-text-field">
                <TextField id="outlined-basic" label="Korean" variant="outlined" onChange={event => setKorean(event.target.value)} />
            </div>
            <div className="create-text-field">
                <TextField id="outlined-basic" label="Level" variant="outlined" onChange={event => {
                    let lvlNumber = parseInt(event.target.value);
                    setLevel(lvlNumber);
                }} />
            </div>

            <Button variant="contained" size="large" style={{ marginTop: "1%" }} onClick={async () => {
                await postSaying({
                    english: english,
                    korean: korean,
                    level: level
                }, level.toString());
                navigate('/home');
            }}>Submit</Button>
        </header>
    )
}

export default Create;