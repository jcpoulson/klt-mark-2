import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import editSaying from '../../backend/editSaying';

import "../../App.css";

import { Button, TextField } from "@mui/material";

const Edit = ({ saying, answer, levelProp }) => {
    const navigate = useNavigate();

    const [english, setEnglish] = useState(saying);
    const [korean, setKorean] = useState(answer);
    const [level, setLevel] = useState(levelProp);

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
                await editSaying({english: saying, korean: answer, level: parseInt(levelProp)}, {
                    english: english,
                    korean: korean,
                    level: parseInt(level)
                })
                navigate('/home');
            }}>Submit Update</Button>
        </>
    )
}

export default Edit;