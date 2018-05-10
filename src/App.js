import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'redux-bundler-react'
import NavBar from './navigation/NavBar'
import StatusPage from './status/StatusPage'
import FilesPage from './files/FilesPage'
import IpldPage from './ipld/IpldPage'
import PeersPage from './peers/PeersPage'
import SettingsPage from './settings/SettingsPage'

class App extends Component {
  componentWillMount () {
    this.props.doInitIpfs()
  }

  render () {
    return (
      <div className='sans-serif flex'>
        <div className='w-25'>
          <NavBar />
        </div>
        <div className='flex-auto'>
          <Route exact path='/' component={StatusPage} />
          <Route path='/files' component={FilesPage} />
          <Route path='/ipld' component={IpldPage} />
          <Route path='/peers' component={PeersPage} />
          <Route path='/settings' component={SettingsPage} />
        </div>
      </div>
    )
  }
}

export default connect('doInitIpfs', App)
