import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from  'react-redux'
import { signUp } from '../../actions/authActions'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.signUp(this.state)
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    const { auth, authError } = this.props

    if (auth.uid) return <Redirect to='/' />
    
    return (
      <div className="SignUp container">
        <div class="row">
          <div class="col s12 m4 offset-m4">
            <div class="card">
              <div class="card-content">
                <span class="card-title">Sign Up</span>
                <br/>
                <form onSubmit={this.handleSubmit} className="white">
                  <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={this.handleChange} />
                  </div>
                  <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={this.handleChange} />
                  </div>
                  <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" onChange={this.handleChange} />
                  </div>
                  <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" onChange={this.handleChange} />
                  </div>
                  <br/>
                  <div className="input-field">
                    <button className="btn teal lighten-1">Sign Up</button>
                    <div className="red-text center">
                      {authError ? <p>{authError}</p> : null}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
  authError: state.auth.authError
})

const mapDispatchToProps = (dispatch) => ({
  signUp: (newUser) => dispatch(signUp(newUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
