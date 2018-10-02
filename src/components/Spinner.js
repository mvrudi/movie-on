import React, { Component } from 'react'
import spinner from '../../public/imagens/spinnerLogo.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <img
          src={spinner}
          alt="Loading..."
          style={{ width: '150px', height: '150px' }}
        />
      </div>
    )
  }
}
