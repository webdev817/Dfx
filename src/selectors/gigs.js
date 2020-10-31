import moment from 'moment'

// Get Visible Gigs
export default (gigs, { text, sortBy, startDate, endDate }) => {
  return gigs.filter((gig) => {
    const createdAtMoment = moment(gig.createdAt)
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
    const textMatch = gig.description.toLowerCase().includes(text.toLowerCase())

    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b) => {
    if(sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1
    }
  })
}