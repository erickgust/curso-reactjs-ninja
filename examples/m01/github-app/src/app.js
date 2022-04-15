'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userInfo: null,
      repos: [],
      starred: []
    }
  }

  getRepos (type) {
    return () => {
      const username = this.state.userInfo.login
      fetch(`https://api.github.com/users/${username}/${type}`)
        .then(req => req.json())
        .then(repos => this.setState({
          [type]: repos.map((repo) => ({
            name: repo.name,
            url: repo.html_url,
            id: repo.id
          }))
        }))
    }
  }

  handleSearch (e) {
    const target = e.target
    const value = target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      target.disabled = true
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
            },
            repos: [],
            starred: []
          })
        })
        .finally(() => { target.disabled = false })
    }
  }

  render () {
    return (
      <AppContent
        userInfo={this.state.userInfo}
        repos={this.state.repos}
        stars={this.state.starred}
        handleSearch={(e) => this.handleSearch(e)}
        getRepos={this.getRepos('repos')}
        getStars={this.getRepos('starred')}
      />
    )
  }
}

export default App
