import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logOut } from '../actions/login'

class Navigation extends Component{
    onClick = () => {
        this.props.dispatch(logOut())
    }

    render(){
        const { user } = this.props 
        return(
        <div>
        <nav className='navbar navbar-expand-sm navbar-light bg-light'>
            {
                user &&
                 (      
                <li className = 'nav-link'>
                    <img src = {user.avatarURL} className = 'img-responsive' alt = 'avatar'/>
                    <b> {user.name}</b>
                </li>
                )
            }
  
        <div className=' navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
                <NavLink to='/' exact className='nav-link'>
                    Home
                </NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to = '/add' className='nav-link'>
                    New Question
                </NavLink>
            </li>
            <li className = 'nav-item'>
                <NavLink to='/leaderboard' className='nav-link'>
                    Leader Board
                </NavLink>
            </li>
           
          </ul>
          <ul className="navbar-nav navbar-right">
          <li className = 'nav-item right' onClick = {() => (this.onClick())}>
                <NavLink to='/login' className='nav-link'>
                    Logout
                </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      </div>
        )
    }
}

function mapStatetoProps({users}, {id}){
   
    return {
        user: users[id]
    }
}

export default connect(mapStatetoProps)(Navigation)