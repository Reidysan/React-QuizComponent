import React, { Component } from 'react'

let quizData = require('./quiz_data.json')

class Quiz extends React.Component {

    constructor(props) {
        super(props);
        this.state = { quiz_position: 1 }

    }
    render() {
        return (
            <div>
                <div className='QuizQuestion'>{this.state.quiz_questions(props.quizData)}, {instruction_text}</div>
            </div>
        )
    }
}

export default Quiz