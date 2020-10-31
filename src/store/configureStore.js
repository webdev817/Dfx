import { createStore, combineReducers } from 'redux'
import gigsReducer from '../reducers/gigs'
import filtersReducer from '../reducers/filters'

// Store Creation
export default () => {
  const store = createStore(
    combineReducers({
      gigs: gigsReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return store
}