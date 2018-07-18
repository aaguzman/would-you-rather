import React, { Component } from 'react'
import { connect } from 'react-redux'
import SighIn  from '../components/SignIn'

class LoginPage extends Component {
    render() {
        return(
            <div>
                <SighIn/>
            </div>
        )
    }
}

export default connect()(LoginPage) 