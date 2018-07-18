import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserScore from '../components/UserScore'

class LeaderBoard extends Component {
    render() {
        const { leaders,users } = this.props
        return(
            <div>
            {
                leaders.map((user) => (
                <UserScore user = {users[user]} key = {user}/>
                ))
            }
            </div>
            
        )
    }
}

function mapStateProps({users}){ 
    return {
       leaders: Object.keys(users).sort((a,b) => 
        (users[b].questions.length + Object.keys(users[b].answers).length) 
        - (users[a].questions.length + Object.keys(users[a].answers).length)),
       users: users 
    }
}

export default connect(mapStateProps)(LeaderBoard)