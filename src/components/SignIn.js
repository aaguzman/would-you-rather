import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/login'
import { withRouter } from 'react-router-dom'

class SignIn extends Component {

    handleChange = (e) => {
        const text = e.target.value
        this.props.dispatch(login(text))
        this.props.history.push('/')
      }

    render(){
        const {users} = this.props
        return(
            <div className = 'card'>
                <div className = 'card-header'>
                    Sign In
                </div>
                <div className = 'card-body center'>
                    <select autoFocus onChange= {this.handleChange}>
                        <option disabled selected>Sign in as:</option>
                        {
                        users.map((user)=>(
                            <option key = {user} value={user} >
                                {user}
                            </option>   
                        ))
                        }
                    </select>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users}){
    console.log(Object.keys(users))
    return({
        users: Object.keys(users)
    })
    
}

export default withRouter(connect(mapStateToProps)(SignIn))