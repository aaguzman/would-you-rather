import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Question extends Component {
    

    render () {
        const { question,user,id } = this.props

        return(
            <div className = 'card'>
                <div className = 'card-header'>
                    {user.name} Asks:
                </div>
                <div className = 'card-body'>
                    <div className = 'row'>
                        <div className = 'col-md-6'>
                        <img className = 'img-responsive' src={user.avatarURL} alt = 'avatar'/>
                        </div>
                        <div className = 'col-md-6'>
                            <h5>Would you rather: </h5>
                            <small className = 'text-muted'>{question.optionOne.text}</small>
                        </div>
                    </div>
                    <NavLink to = {`/question/${id}`}>
                        <button className= 'btn btn-primary col-md-12'>View Poll</button>
                    </NavLink>
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions,users}, { id }) {
    const question = questions[id]

    return {
        question,
        user: users[question.author]
    }
}

export default connect(mapStateToProps)(Question)