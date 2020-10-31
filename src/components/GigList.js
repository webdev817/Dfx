import React from 'react'
import { connect } from 'react-redux'
import GigListItem from './GigListItem'
import selectGigs from '../selectors/gigs'

const GigList = (props) => (
  <div>
    <h1>Gig List</h1>
    {props.gigs.map((gig) => {
      return <GigListItem key={gig.id} {...gig} />
    })}
  </div>
)

const mapStateToProps = (state) => {
  return {
    gigs: selectGigs(state.gigs, state.filters)
  }
}

export default connect(mapStateToProps)(GigList)