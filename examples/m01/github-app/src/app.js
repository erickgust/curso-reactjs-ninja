'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userInfo: null,
      repos: [],
      stars: []
    }
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      fetch(`https://api.github.com/users/${value}`)
        .then(req => req.json())
        .then(user => {
          this.setState({
            userInfo: {
              name: user.name,
              avatar: user.avatar_url,
              login: user.login,
              repos: user.public_repos,
              followers: user.followers,
              following: user.following
            }
          })
        })
    }
  }

  render () {
    return (
      <AppContent
        userInfo={this.state.userInfo}
        repos={this.state.repos}
        stars={this.state.stars}
        handleSearch={(e) => this.handleSearch(e)}
      />
    )
  }
}

export default App
