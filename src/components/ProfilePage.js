import React, { Component } from 'react'
import AuthService from '../services/AuthService'

export default class Profile extends Component {
  state = {
    currentUser: AuthService.getCurrentUser()
  }

  render() {
    const { currentUser } = this.state

    return (
      <div>
        <div className="">
          <header className="jumbotron">
            <h2>Account Profile</h2>
          </header>
        </div>
        <div className="container">
          <div className="card">
            <h3>
              Primary Information
            </h3>
            <hr />
            <h5>
              Full Name
            </h5>
            <h5>
              <strong>{currentUser.user.name}</strong>
            </h5>
            <h5>
              Date of Birth
            </h5>
            <h5>
              <strong>{currentUser.user.dob}</strong>
            </h5>
            <h5>
              Languages I can speak
            </h5>
            <h5>
              <strong>{currentUser.user.languages}</strong>
            </h5>
            <h5>
              Country
            </h5>
            <h5>
              <strong>{currentUser.user.country}</strong>
            </h5>
            <h5>
              Gender
            </h5>
            <h5>
              <strong>{currentUser.user.gender}</strong>
            </h5>
            <h5>
              About Me
            </h5>
            <h5>
              <strong>{currentUser.user.about}</strong>
            </h5>
            <h5>
              Skills / Categories
            </h5>
            <h5>
              <strong>{currentUser.user.skills}</strong>
            </h5>
          </div>
        </div>
      </div>
    )
  }
}