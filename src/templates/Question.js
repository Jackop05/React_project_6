import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Question(props) {
    
    function handleClick(index) {
        props.setChoosen(returnChoosen(index))
    }

    function returnChoosen(index) {
        let array = []
        for (let i = 0; i < props.choosen.length; i++) {
            if (i == props.indexUp) {
                array.push(index)
            } else {
                array.push(props.choosen[i])
            }
        }
        return array
    }

    function renderAnswers() {
        if (props.checked == false) {
            const answers = props.answers.map((element, index) => {
                return (
                    <div className={props.choosen[props.indexUp] == index ? 'answer selected' : 'answer'} onClick={() => {handleClick(index)}} >{element}</div>    
                )
            })
            return answers
        } else if (props.checked == true) {
            const answers = props.answers.map((element, index) => {
                let correct = ( props.correctAnswer == props.answers[props.choosen[props.indexUp]] ? 'correct' : 'incorrect' )
                return (
                    <div className={props.choosen[props.indexUp] == index ? `answer ${correct}` : 'answer'} >{element}</div>    
                )
            })
            return answers
        }
    }



    return (
        <div className="question-section">
            <div className="question">{props.question}</div>
            <div className="answers">
                {renderAnswers()}
            </div>
            <hr className="line"></hr>
        </div>
    )
}