import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'
import { isEmail } from 'validator'

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

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    )
  }
}

const vname = value => {
  if (!isNaN(value) || value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The name must be between 3 and 20 characters and contain at least 1 letter.
      </div>
    )
  }
}

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    )
  }
}

export default class Register extends Component {
  constructor(props) {
    super(props)
    this.handleRegister = this.handleRegister.bind(this)
    this.onChangename = this.onChangename.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.onChangeRole = this.onChangeRole.bind(this)

    this.state = {
      name: '',
      email: '',
      password: '',
      role: 'student',
      successful: false,
      message: ''
    }
  }

  onChangename(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onChangeRole(e) {
    e.preventDefault()
    this.setState({
      role: e.target.value
    })
  }

  handleRegister(e) {
    e.preventDefault()

    this.setState({
      message: '',
      successful: false
    })

    this.form.validateAll()

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.name,
        this.state.email,
        this.state.password,
        this.state.role
      ).then(() => {
        this.props.history.push('/profile')
      },

        // (
        //   response => {
        //     this.setState({
        //       message: response.data.message,
        //       successful: true
        //     })
        //   },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()

          this.setState({
            successful: false,
            message: resMessage
          })
        }
      )
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
            Please create your account
          </div>
          <div>
            <img className="register__intro--img" alt="DFX Student" src="./images/student.png" />
          </div>
        </div>
        <div className="register__form--container">
          <div className="register__form">
            <Form
              onSubmit={this.handleRegister}
              ref={c => {
                this.form = c
              }}
            >
              {!this.state.successful && (
                <div className="register__form--group">

                  <div className="register__form--role">
                    <button
                      className={this.state.role === 'student' ? 'register__button btnStudentActive' : 'register__button btnStudentInactive'}
                      value="student"
                      onClick={this.onChangeRole}
                    >
                      Student
                    </button>
                    <button
                      className={this.state.role === 'student' ? 'register__button btnMentorInactive' : 'register__button btnMentorActive'}
                      value="mentor"
                      onClick={this.onChangeRole}
                    >
                      Mentor
                    </button>
                  </div>

                  <div className="register__form--user">
                    <label htmlFor="name">Full Name</label>
                    <Input
                      type="text"
                      className="register__form--user-control"
                      name="name"
                      value={this.state.name}
                      onChange={this.onChangename}
                      validations={[required, vname]}
                    />
                  </div>

                  <div className="register__form--email">
                    <label htmlFor="email">Email Address</label>
                    <Input
                      type="text"
                      className="register__form--email-control"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      validations={[required, email]}
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
                      validations={[required, vpassword]}
                    />
                  </div>

                  <div className="">
                    <button className="register__form--button">Sign Up</button>
                  </div>
                </div>
              )}

              {this.state.message && (
                <div className="form-group">
                  <div
                    className={
                      this.state.successful
                        ? "alert alert-success"
                        : "alert alert-danger"
                    }
                    role="alert"
                  >
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
            </Form>
          </div>
        </div>
      </div>
    )
  }
}