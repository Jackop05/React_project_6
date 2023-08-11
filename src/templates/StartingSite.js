import React from 'react';
import ReactDOM from 'react-dom/client';

export default function StartingSite(props) {
    
    function handleClick() {
        props.setState(!props.state)
    }



    return (
        <div className="starting-site">
            <div className="title">Quizzical</div>
            <div className="description-quiz">Click button below to start the quizz</div>
            <div className="quiz-btn btn" onClick={handleClick}>Start Quiz</div>
        </div>
    )
} 