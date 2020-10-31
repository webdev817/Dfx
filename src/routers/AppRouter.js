import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from '../components/AboutPage'
import AddGig from '../components/AddGigPage'
import Contact from '../components/ContactPage'
import EditGig from '../components/EditGigPage'
import Faq from '../components/FaqPage'
import Footer from '../components/Footer'
import Gigs from '../components/GigsDashboardPage'
import Header from '../components/Header'
import HomePage from '../components/HomePage'
import HowItWorks from '../components/HowItWorksPage'
import Jobs from '../components/JobsPage'
import Navbar from '../components/Navbar'
import NotFoundPage from '../components/NotFoundPage'
import Privacy from '../components/PrivacyPage'
import Profile from '../components/ProfilePage'
import Register from '../components/Register'
import Services from '../components/ServicesPage'
import SignIn from '../components/SignInPage'
import ToS from '../components/TosPage'
import SideBar from '../components/SideBar'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <div className='main-body'>
        <SideBar/>
        <Switch>
          <div className='home-body'>
            <Route path='/' component={HomePage} exact={true} />
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact} />
            <Route path='/create_gig' component={AddGig} />
            <Route path='/edit_gig/:id' component={EditGig} />
            <Route path='/faq' component={Faq} />
            <Route path='/gigs' component={Gigs} />
            <Route path='/jobs' component={Jobs} />
            <Route path='/howitworks' component={HowItWorks} />
            <Route path='/privacy' component={Privacy} />
            <Route path='/profile' component={Profile} />
            <Route path='/register' component={Register} />
            <Route path='/services' component={Services} />
            <Route path='/signin' component={SignIn} />
            <Route path='/tos' component={ToS} />
            <Route component={NotFoundPage} />
          </div>          
        </Switch>
      </div>      
      <Footer />
    </div>
  </BrowserRouter>
)

export default AppRouter