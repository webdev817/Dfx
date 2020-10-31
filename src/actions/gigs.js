import { v4 as uuid } from 'uuid'

// ADD_GIG
export const addGig = (
  {
    title = '',
    description = '',
    skills = '',
    daysNeeded = 0,
    hoursNeeded = 0,
    d1Description = '',
    d2Description = '',
    d3Description = '',
    d1HoursNeeded = 0,
    d2HoursNeeded = 0,
    d3HoursNeeded = 0
  } = {}
) => ({
  type: 'ADD_GIG',
  gig: {
    id: uuid(),
    title,
    description,
    skills,
    daysNeeded,
    hoursNeeded,
    d1Description,
    d2Description,
    d3Description,
    d1HoursNeeded,
    d2HoursNeeded,
    d3HoursNeeded
  }
})

// REMOVE_GIG
export const removeGig = ({ id } = {}) => ({
  type: 'REMOVE_GIG',
  id
})

// EDIT_GIG
export const editGig = (id, updates) => ({
  type: 'EDIT_GIG',
  id,
  updates
})