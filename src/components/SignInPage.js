import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'

import AuthService from '../services/AuthService'

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    )
  }
}

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)

    this.state = {
      email: '',
      password: '',
      loading: false,
      message: ''
    }
  }

  onChangeEmail(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  handleLogin(e) {
    e.preventDefault()

    this.setState({
      message: '',
      loading: true
    })

    this.form.validateAll()

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.name, this.state.password).then(
        () => {
          location.href='/';
          //this.props.history.push('/')
          //window.location.reload()

        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()

          this.setState({
            loading: false,
            message: resMessage
          })
        }
      )
    } else {
      this.setState({
        loading: false
      })
    }
  }

  render() {
    return (
      <div className="register">
        <div className="register__intro">
          <NavLink to="/" className="link header__link register__intro--link" activeClassName="is-active" exact={true}>Back to Home</NavLink>
          <div className="register__intro--welcome">
            Welcome to DFX
          </div>
          <div className="register__intro--text">
            Please login to your account
          </div>
          <div>
            <img className="register__intro--img" alt="DFX Student" src="./images/student.png" />
          </div>
        </div>
        <div className="register__form--container">
          <div className="register__form">
            <Form
              onSubmit={this.handleLogin}
              ref={c => {
                this.form = c
              }}
            >
              <div className="register__form--group">
                <div className="register__form--email">
                  <label htmlFor="email">Email Address</label>
                  <Input
                    type="text"
                    className="register__form--email-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required]}
                  />
                </div>

                <div className="register__form--password">
                  <label htmlFor="password">Password</label>
                  <Input
                    type="password"
                    className="register__form--password-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required]}
                  />
                </div>

                <div className="form-group">
                  <button
                    className="register__form--button"
                    disabled={this.state.loading}
                  >
                    {this.state.loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>Sign In</span>
                  </button>
                </div>

                {this.state.message && (
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                      {this.state.message}
                    </div>
                  </div>
                )}
                <CheckButton
                  style={{ display: "none" }}
                  ref={c => {
                    this.checkBtn = c
                  }}
                />
              </div>
            </Form>

          </div>
        </div>
      </div>
    )
  }
}