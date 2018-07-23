import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionsPage extends Component {
    state = {
        viewAnswered: false,
    }

    toggleQuestions = () => {
        this.setState((currentState)=>({
            viewAnswered: !currentState.viewAnswered
        }))
    }

    render(){
        const {unansweredIds, answereredIds} = this.props
        
        return(
            <div className = 'center'>
                <h1>{this.state.viewAnswered?'Answered' : 'Unanswered'} Questions</h1>
                <div className = 'btn-group'>
                    <button
                        className = 'btn btn-outline-primary' 
                        disabled = {!this.state.viewAnswered}
                        onClick = {() => (this.toggleQuestions())} 
                    >Unanswered</button>
                    <button 
                        className = 'btn btn-outline-primary' 
                        disabled = {this.state.viewAnswered}
                        onClick = {() => (this.toggleQuestions())} 
                    >Answered</button>
                </div>
                {this.state.viewAnswered === false 
                ? unansweredIds.map((id) =>(
                <Question id = {id} key = {id} />
                 ))
                : answereredIds.map((id) =>(
                    <Question id = {id} key = {id} />
                  ))
              
                }
            </div>
        )
    }
}

function mapStateToProps({questions,login,users}){
    const answereredIds = Object.keys(users[login].answers)
    const unansweredIds = Object.keys(questions)
    return {
        unansweredIds: unansweredIds.filter((id) => !answereredIds.includes(id)).sort((a,b)=> questions[b].timestamp - questions[a].timestamp),
        answereredIds: answereredIds.sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    }
}

export default connect(mapStateToProps)(QuestionsPage)