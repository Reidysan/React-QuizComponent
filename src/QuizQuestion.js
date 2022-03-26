import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {

    handleClick(buttonText) {
        if (buttonText === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler()
        }
    }
    render() {
        const index = this.props.quiz_question;
        const answer_option = this.props.answer_option;

        return (
            <main>
                <section>
                    <p>
                        {this.props.quiz_question.instruction_text}
                    </p>
                    <section className='buttons'>
                        <ul>
                            {answer_option.map((index) =>
                                <QuizQuestionButton
                                    clickHandler={this.handleClick.bind(this)}
                                    key={index}
                                    button_text={answer_option}
                                />
                            )}
                        </ul>
                    </section>
                </section>
            </main>
        )
    }
}

export default QuizQuestion