'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'

const defaultRepoState = {
  repos: [],
  activePage: 1,
  total: 1
}

class App extends Component {
  constructor () {
    super()
    this.state = {
      userInfo: null,
      repos: defaultRepoState,
      starred: defaultRepoState,
      isFetching: false
    }

    this.perPage = 3
  }

  getRepos (type, page = 1) {
    return () => {
      const username = this.state.userInfo.login
      fetch(`https://api.github.com/users/${username}/${type}?per_page=${this.perPage}&page=${page}`)
        .then(req => {
          const linkHeader = req.headers.get('Link') || ''
          const totalPagesMatch = linkHeader.match(/&page=(\d+)>; rel="last/)

          req.json().then(repos => {
            this.setState({
              [type]: {
                repos: repos.map((repo) => ({
                  name: repo.name,
                  url: repo.html_url,
                  id: repo.id
                })),
                activePage: page,
                total: totalPagesMatch ? +totalPagesMatch[1] : this.state[type].total
              }
            })
          })
        })
    }
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      this.setState({ isFetching: true })

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
            repos: defaultRepoState,
            starred: defaultRepoState
          })
        })
        .finally(() => this.setState({ isFetching: false }))
    }
  }

  render () {
    return (
      <AppContent
        {...this.state}
        handleSearch={(e) => this.handleSearch(e)}
        getRepos={this.getRepos('repos')}
        getStars={this.getRepos('starred')}
        handlePage={(type, page) => this.getRepos(type, page)()}
      />
    )
  }
}

export default App
