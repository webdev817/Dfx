import React, { Component } from 'react'
import { connect } from 'react-redux'
import GigForm from './GigForm'
import { editGig, removeGig } from '../actions/gigs'
import AuthService from '../services/AuthService'

class EditGig extends Component {
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
            <h2>Edit Gig</h2>
          </header>
        </div>
        <div className="container">
          <GigForm
            gig={this.props.gig}
            btnText='Update and Publish'
            onSubmit={(gig) => {
              this.props.dispatch(editGig(this.props.gig.id, gig))
              this.props.history.push('/gigs')
            }}
          />
          <button
            onClick={() => {
              this.props.dispatch(removeGig({ id: this.props.gig.id }))
              this.props.history.push('/gigs')
            }}
          >
            Remove
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    gig: state.gigs.find((gig) => gig.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(EditGig)