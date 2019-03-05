import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signIn } from '../../actions/authActions'

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.signIn(this.state)
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
      <div className="SignIn container">
        <div class="row">
          <div class="col s12 m4 offset-m4">
            <div class="card">
              <div class="card-content">
                <span class="card-title">Login</span>
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
                  <br/>
                  <div className="input-field">
                    <button className="btn teal lighten-1">Login</button>
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
  signIn: (creds) => dispatch(signIn(creds))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
