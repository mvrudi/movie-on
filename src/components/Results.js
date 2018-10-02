import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {config} from '../../public/api_config/api_config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Results extends Component {
  constructor(){
    super();

    this.state = {
      filme: []
    }
  }

  componentDidMount() {
    const id = (this.props.match.params.id)
    fetch(`${config.API_URL}?i=${id}&apikey=${config.API_KEY}`)
   .then((res) => res.json())
   .then((data) => {
       this.setState ({ filme: data })
    })
  }

  render() {
    const times = <FontAwesomeIcon style={{color: '#FFFFFF'}} icon='times' id="filmIcon" />
    const star = <FontAwesomeIcon icon='star' id="star" />
    const orangeStar = <FontAwesomeIcon style={{color: '#F2761E'}} icon='star' id="star" />
    const countStar = this.state.filme.imdbRating
    let rating = ''

    switch (true) {
      case (countStar <= 2):
          rating = <p className="info">{orangeStar}{star}{star}{star}{star}&nbsp;&nbsp;{countStar}/10</p>
        break;
      case (countStar <= 4):
        rating = <p className="info">{orangeStar}{orangeStar}{star}{star}{star}&nbsp;&nbsp;{countStar}/10</p>
        break;
      case (countStar <= 6):
          rating = <p className="info">{orangeStar}{orangeStar}{orangeStar}{star}{star}&nbsp;&nbsp;{countStar}/10</p>
        break;
      case (countStar <= 8):
        rating = <p className="info">{orangeStar}{orangeStar}{orangeStar}{orangeStar}{star}&nbsp;&nbsp;{countStar}/10</p>
        break;
      case (countStar <= 10):
          rating = <p className="info">{orangeStar}{orangeStar}{orangeStar}{orangeStar}{orangeStar}&nbsp;&nbsp;{countStar}/10</p>
        break;
    
      default:
        rating = <p className="info">{star}{star}{star}{star}{star}&nbsp;&nbsp;{countStar}'/10'</p>   
        break;
    }

    return (
      <div id="divContainer">
            <img id="imgResult" src={this.state.filme.Poster} />
            <div id="divInfo">
            <Link to={'/'}>
              <p id="voltarIcon" style={{color: 'white'}}>{times}&nbsp;voltar</p>
            </Link>
            <h1>{this.state.filme.Title}</h1>
            <p className="info">{this.state.filme.Year}&nbsp;&nbsp;|&nbsp;&nbsp;{this.state.filme.Runtime}&nbsp;&nbsp;|&nbsp;&nbsp;{this.state.filme.Genre}</p>
            {rating}
            <h2 className="sinopse">Sinopse</h2>
            <p className="sinopse">{this.state.filme.Plot}</p>
            <Link to={'/'}>
              <button id="voltar">Voltar</button>
            </Link>
          </div>
      </div>
    )
  }
}