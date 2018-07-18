import React, { Component } from 'react'
import { connect } from 'react-redux'
import { vote } from '../actions/questions'
import CircularProgressbar from 'react-circular-progressbar'


class WouldYouRather extends Component {
    state = {
        option: ''
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { question,login } = this.props
        
        
        const  answer = {
            authedUser: login,
            qid: question.id,
            answer: [this.state.option]
        }
        console.log('answer', answer)


        this.props.dispatch(vote(answer))
        this.setState({
            option: ''
        })
        
    }

    handleChange = (e) => {
        
        this.setState({
            option: e.target.value
        })
        
    }

    render(){
        const { question,user,login } = this.props
        
        if(question == null){
            
            this.props.history.push('/Error')
            return(<div></div>)
        }
            const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length
        return(
            <div className = 'card'> 
                {
            question.optionOne.votes.includes(login) || question.optionTwo.votes.includes(login) 
            ? (
                <div>
                    <div className= 'card-header'>
                        Asked by {user.name}
                    </div>
                    <div className = 'card-body' >
                        <div className = 'row'>
                            <div className = 'col=md-6'>
                                <img className = 'img-responsive' src = {user.avatarURL} alt = 'avatar'/>
                            </div>
                        <div className = 'col-md-6'>
                            <h3>Results:</h3>
                            <div className = 'WYR-Results center'>
                                <small className = 'text-blue'>{question.optionOne.text}: <b>{question.optionOne.votes.length} of {totalVotes} votes</b></small>
                                <CircularProgressbar
                                    percentage = {(question.optionOne.votes.length/(question.optionTwo.votes.length + question.optionOne.votes.length)) * 100}
                                    text = {null}
                                    className = 'circle'
                                    strokeWidth={50}
                                    initialAnimation = { true }  
                                    styles={{
                                    path: { strokeLinecap: 'butt' },
                                    text: { fill: '#000' },
                                    trail: {
                                        stroke: '#f88',
                                    },
                                    }}
                                />
                            </div>
                            <br/>
                        <div className='WYR-Results center'>
                            <small className = 'text-red'>{question.optionTwo.text}: <b>{question.optionTwo.votes.length} of {totalVotes} votes</b></small>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
            )
            : 
            <div>
                <div className = 'card-header'>
                    {user.name} Asks:
                </div>
                <div className = 'card-body'>
                    <div className = 'row'>
                        <div className = 'col-md-6'>
                            <img className = 'img-responsive' src={user.avatarURL} alt = 'avatar' />
                        </div>
                        <div className = 'col-md-6'>
                            <h3>Would You Rather</h3>
                            <form onSubmit = {this.handleSubmit}>
                                <input
                                    onChange = {this.handleChange} 
                                    type = 'radio' 
                                    value = 'optionOne'
                                    name = 'choice'/>{question.optionOne.text}
                                    <br/>
                                <input 
                                    onChange = {this.handleChange}
                                    type = 'radio' 
                                    value = 'optionTwo'
                                    name = 'choice'/>{question.optionTwo.text}
                                    <br/>
                                <button className = 'btn btn-success col-md-12'>Submit</button>
                            </form> 
                        </div>
                    </div>
                </div>
            </div>
            

            }
            </div>

                
        )
    }

}

function mapStateToProps({questions,users,login}, props) {
    const { id } = props.match.params
    const question = questions[id]


    if(question == null){
        return {}
    }

    return {
        question,
        user: users[question.author],
        login

    }
}
export default connect(mapStateToProps)(WouldYouRather)