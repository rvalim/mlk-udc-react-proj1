import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as authAction from '../action/authedUser'

class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            selectedUser: ''
        }
    }

    handleChange = e => this.setState({ selectedUser: e.target.value})

    Login(){
        let {dispatch} = this.props
        dispatch(authAction.setAuthedUser(this.state.selectedUser))
    }
    
    renderOption = person => <option key={person.id} value={person.id}>{person.name}</option>
    
    render() {
        let {users} = this.props
        
        return (<div>
            <select onChange={this.handleChange.bind(this)} value={this.state.selectedUser}>
                <option value="">Selecione um usuario</option>
                {Object.keys(users).map(u => this.renderOption(users[u]))}
            </select>
            <button onClick={this.Login.bind(this)}><span>>></span></button>
        </div>)
    }

}

function mapStateToProps({users, authedUser}){
    return {
        users,
        authedUser
    }
}

export default connect(mapStateToProps)(Login)