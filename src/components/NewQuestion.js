import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveQuestion } from '../actions/questions'

class NewQuestion extends Component {
    state = {
        optionOneText: '',
        optionTwoText: '',
    }
    
    onChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value,
        })
    }

    onSubmit = (e) => {
        const { dispatch, history } = this.props 
        e.preventDefault()
        dispatch(saveQuestion({
            ...this.state,
        })).then((res) => history.push(`/`))
        
        this.setState({
            optionOneText: '',
            optionTwoText: ''
        })

        

    }
    
    render() {
        const { optionOneText, optionTwoText} = this.state

        return(
            <div className = 'card input-group'>
                <div className = 'card-header'>
                    New Question
                </div>
                <div className ='card-body'>
                    <form onChange = {this.onChange} onSubmit = {this.onSubmit} className = 'form-group'>
                        Option 1:<input 
                                    type = 'text' 
                                    name = 'optionOneText'
                                    className = 'form-control' 
                                    value = {optionOneText}/>
                        <br/>
                        
                        Option 2:<input 
                                    type = 'text' 
                                    name = 'optionTwoText'
                                    className = 'form-control'
                                    value = {optionTwoText}/>
                        <br/>
                        <button type = 'submit' 
                            disabled = {optionOneText === '' || optionTwoText === ''}
                            className = 'btn btn-success col-md-12' 
                        >Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect()(NewQuestion)