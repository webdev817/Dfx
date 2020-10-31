import React, { Component } from 'react'
import { connect } from 'react-redux'
import GigForm from './GigForm'
import { addGig } from '../actions/gigs'
import AuthService from '../services/AuthService'

class CreateGig extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: AuthService.getCurrentUser() ? AuthService.getCurrentUser() : 'Anonymous'
    }  
  }
  
  render() {
    const { currentUser } = this.state.currentUser
    console.log(currentUser)

    return (
      <div>
        <div className="">
          <header className="jumbotron">
            <h2>Create Gig</h2>
          </header>
        </div>
        <div className="container">
          <GigForm
            btnText='Confirm and Publish'
            onSubmit={(gig) => {
              this.props.dispatch(addGig(gig))
              this.props.history.push('/gigs')
            }}
          />
        </div>
      </div>
    )
  }
}

export default connect()(CreateGig)