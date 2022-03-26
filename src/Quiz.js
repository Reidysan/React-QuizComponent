import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion'

let quizData = require('./quiz_data.json')

class Quiz extends React.Component {

    constructor(props) {
        super(props);
        this.state = { quiz_position: 1 }

    }
    render() {
        return (
            <div>
                <QuizQuestion className='QuizQuestion'>
                    {quizData.quiz_questions[0].instruction_text},
                    {quiz_question.quizData.quiz_questions.quiz_position[-1]}
                </QuizQuestion>
            </div>
        )
    }
}

export default Quiz