import React from 'react';
import ReactDOM from 'react-dom/client';
import Question from './Question.js'; 

export default function Hero(props) {
    const [data, setData] = React.useState([])
    const [choosen, setChoosen] = React.useState([])
    const [answers, setAnswers] = React.useState([])
    const [checked, setChecked] = React.useState(false)
    const [score, setScore] = React.useState(0) 
    
    React.useEffect(() => {
        starting()
    }, [])
        
    

    async function starting() {
        const response = await fetch('https://opentdb.com/api.php?amount=5')
        let arrayData = await response.json()
        arrayData = arrayData.results
        setData(arrayData)
        returnAnswers(arrayData)
        returnChoosen(arrayData)
    }

    function returnAnswers(data) {
        let array = []
        data.map((element, index) => {
            array[index] = shuffleArray([element.correct_answer, ...element.incorrect_answers])

        }) 
        setAnswers(array)
    }

    function returnChoosen(data) {
        let array = []
        for (let i = 0; i < data.length; i++) {
            array.push('none')
        }
        setChoosen(array)
    }

    function returnChecked() {
        let counter = 0
        for (let i = 0; i < choosen.length; i++) {
            if (data[i].correct_answer == answers[i][choosen[i]]) {
                counter++
            }
        }
        setChecked(!checked)
        scoreUp(counter)
    }

    function scoreUp(counter) {
        setScore(counter)
    }

    function shuffleArray(array) {
        const shuffledArray = array.sort(function () {
            return Math.random() - 0.5;
        })
        return [...shuffledArray]
    }

    function renderQuestions() {
        const array = data.map((element, index) => {
            return (
                <Question 
                    question={element.question} 
                    answers={answers[index]}
                    correctAnswer={element.correct_answer}
                    indexUp={index}
                    choosen={choosen}
                    setChoosen={setChoosen}
                    checked={checked}
                />
            )
        })
        return array
    }

    function playAgain() {
        props.setState(!props.state)
    }



    const falseChecked = <div className="check-btn btn" onClick={returnChecked}>Check Answers</div>
    const trueChecked = <div className="score">
            <div className="scored-points">Your score is {score}/5</div>
            <div className="play-again btn" onClick={playAgain} >Play Again</div>
        </div>

    return (
        <div className="hero">
            <div className="questions">
                {renderQuestions()}
            </div>
            { checked ? trueChecked : falseChecked  } 
        </div>
    )
}