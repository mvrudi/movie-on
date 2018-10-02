import React, { Component } from 'react'
import Header from './Header'
import Search from './Search'

export default class MovieOn extends Component {
  render() {
    return (
      <React.Fragment>
         <Header />
         <Search />
      </React.Fragment>
    )
  }
}