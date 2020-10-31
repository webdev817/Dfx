import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import getVisibleGigs from './selectors/gigs'
import 'normalize.css/normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/styles.scss'

const store = configureStore()

const state = store.getState()
const visibleGigs = getVisibleGigs(state.gigs, state.filters)
console.log(visibleGigs)

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))