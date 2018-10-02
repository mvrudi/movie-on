import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMovies } from '../actions/movieActions'
import { Link } from 'react-router-dom'

class Search extends Component {

componentDidMount() {
    if (this.props.movies.movies == '') {
        this.props.fetchMovies()
    } 
}

  render() {
    let resultado = ''
    if (this.props.movies.movies === undefined) {
        resultado = ''
        alert ('Este filme não existe na nossa base de dados!')
    } 
    else {
         resultado = this.props.movies.movies.map(movie => (
        <div key={movie.imdbID}>
            <Link to={'/results/' + movie.imdbID}>
                <img src={movie.Poster} />
            </Link>
        </div>
    ))}

    return (
        <div id="container-filmes">
            {resultado}
        </div>
    )
  }
}

const mapStateToProps = state => ({
    movies: state.movies
})

export default connect(mapStateToProps, { fetchMovies })(Search)