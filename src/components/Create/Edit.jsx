import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import postSaying from "../../backend/postSaying";

import "../../App.css";

import { Button, TextField } from "@mui/material";

const Edit = ({ saying, answer, levelProp }) => {
    const navigate = useNavigate();

    const [english, setEnglish] = useState('');
    const [korean, setKorean] = useState('');
    const [level, setLevel] = useState('');

    return (
        <>
            <div className="create-text-field">
                <TextField id="outlined-basic" label="English" variant="outlined" onChange={event => setEnglish(event.target.value)} defaultValue={saying} />
            </div>
            <div className="create-text-field">
                <TextField id="outlined-basic" label="Korean" variant="outlined" onChange={event => setKorean(event.target.value)} defaultValue={answer} />
            </div>
            <div className="create-text-field">
                <TextField id="outlined-basic" label="Level" variant="outlined" defaultValue={levelProp} onChange={event => {
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
        </>
    )
}

export default Edit;