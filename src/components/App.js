import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import QuestionsPage from '../components/QuestionsPage'
import NewQuestion from '../components/NewQuestion'
import SignIn from '../components/SignIn'
import WouldYouRather from '../components/WouldYouRather'
import LeaderBoard from '../components/LeaderBoard'
import Error from '../components/Error'
import Navigation from '../components/Navigation'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
 
    
    return (
      <Router>
        <div className='App'>
          
          {this.props.loading === true
          ? null
          : <div>
          <Navigation id = {this.props.login}/>
            
              
              <div className = 'container content'>
                <div className = 'col-lg-6 offset-lg-3'>
              {this.props.login === '' 
              ? <SignIn/>
              : (
                <div>
                  <Route path='/' exact component={QuestionsPage} />
                  <Route path='/add' component={NewQuestion} />
                  <Route path='/login' component={SignIn}/>
                  <Route path='/question/:id' component={WouldYouRather}/>
                  <Route path='/leaderboard' component={LeaderBoard}/>
                  <Route path='/Error' component={Error}/>
                </div> 
              )
              }
                </div>
              </div>
            
              
          
          
            </div>
          }
          
        </div>
      </Router> 
    )
  }
}

function mapStateToProps ({login}) {
  console.log(login === null);
  
  return {
    loading: login === null,
    login
  }
}

export default connect(mapStateToProps)(App)
