import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import InputSearch from '../components/InputSearch'

export default class Header extends Component {

 render() {
    const candidato = 'Marcus Reis'
    const img = require('../../public/imagens/foto.jpg')
    
    return (
        <div id="headerContainer">
            <div id= "divLogo">
              <FontAwesomeIcon icon='film' id="filmIcon" />
              <span id="movieTitle">Movie</span><span id="onTitle">On</span>
            </div>
            <div id="divInput"><InputSearch /></div>
            <div id="divAvatar"><img src={img} id='avatar'/><b>{candidato}</b></div>
        </div>
    )
  }                                         
}
