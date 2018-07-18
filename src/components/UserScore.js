import React, { Component } from 'react'

class UserScore extends Component {
    render(){
        const { user } = this.props 
      
        return(
        <div className = 'card'>
            <div className = 'card-header center'>
            <b>{user.name}</b>
            </div>
            <div className = 'card-body row'>
                <div className = 'col-md-4'>
                    <img className = 'img-responsive' src = {user.avatarURL} alt = 'avatar'/>
                </div>
                <div className = 'col-md-5 center'>
                    <p>
                       Answered questions: {Object.keys(user.answers).length} 
                    </p>
                    <p>
                       Created questions: {user.questions.length}
                    </p>
                </div>
                <div className = 'col-md-3'>
                    <div className = 'card center'>
                        <div className = 'card-header' style = {{color: 'red'}}>
                            Score
                        </div>
                        <div className = 'card-body'>
                            {user.questions.length + Object.keys(user.answers).length}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default UserScore