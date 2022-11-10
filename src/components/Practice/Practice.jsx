import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getRandomSaying from "../../backend/db";

import "../../App.css";
import "./Practice.css";
import bgImage1 from "../../assets/img/korea-bg-1.jpg";

import PracticeComponent from './PracticeComponent';
import Edit from '../Create/Edit';
import DeleteModal from '../Create/DeleteModal';

const Practice = () => {
    let { level } = useParams();
    
    const [saying, setSaying] = useState("Term - Saying - Expression");
    const [answer, setAnswer] = useState("Answer - In - Korean");
    const [photo, setPhoto] = useState(bgImage1);

    const [showAnswer, setShowAnswer] = useState(false);
    const [edit, setEdit] = useState(false);


    // Delete Modal
    const [deleteOpen, setDeleteOpen] = useState(false);
    const handleDeleteOpen = () => setDeleteOpen(true);
    const handleDeleteClose = () => setDeleteOpen(false);

    useEffect(() => {
        getRandomSaying(level).then(res => {
            setSaying(res.english);
            setAnswer(res.korean);
        })
    }, [level]);

    async function refresh() {
        getRandomSaying(level).then(res => {
            setSaying(res.english);
            setAnswer(res.korean);
        })
    }
    
    return (
        <div className="App-header" style={{ backgroundImage: `url(${photo})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center" }}>
            {
                edit ?
                    <Edit saying={saying} answer={answer} levelProp={level} />
                :
                    <PracticeComponent saying={saying} answer={answer} showAnswer={showAnswer} setShowAnswer={setShowAnswer} setPhoto={setPhoto} refresh={refresh} setEdit={setEdit} handleDeleteOpen={handleDeleteOpen} />
            }
            <DeleteModal deleteOpen={deleteOpen} handleDeleteClose={handleDeleteClose} />
        </div>
    )
}

export default Practice;