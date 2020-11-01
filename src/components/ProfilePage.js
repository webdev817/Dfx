import React, { Component } from 'react'
import AuthService from '../services/AuthService'
import ProfileTabs from './ProfileTab'

export default class Profile extends Component {
  state = {
    currentUser: AuthService.getCurrentUser()
  }

  render() {
    const { currentUser } = this.state

    return (
        
        <div className='profile-page'>
          <div className="">
            <header className="jumbotron">
              <h2>Account Profile</h2>
            </header>
          </div>
          <ProfileTabs/>          
        </div>
    )
  }
}