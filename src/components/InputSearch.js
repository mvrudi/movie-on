import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMovies } from '../actions/movieActions'
import { cleanState } from '../actions/cleanMovies'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Spinner from './Spinner'

class InputSearch extends Component {
  constructor() {
    super();

    this.state = {
      busca: '',
      isToggled: false
    }
  }

  changeSearch =(e)=>{
    this.setState ({ isToggled: true })
    this.props.cleanState()
    this.setState({ busca: e.target.value })
    {if(e.target.value === '') {this.setState ({ isToggled: false })}}
  }

  searchMovie = (e) => {
    e.preventDefault()
    this.props.fetchMovies(this.state.busca)
    this.setState ({ isToggled: false })
  }

  render() {
    return (
        <div>
            <form onSubmit={this.searchMovie}>
              <input 
                type="text" 
                placeholder="Que filme você procura?"
                id="inputSearch" 
                maxLength="25" 
                onChange={this.changeSearch}
              />
              <a href="#" onClick={this.searchMovie}><FontAwesomeIcon icon='search' id="searchIcon"  /></a>
            </form>
            <div id="title">
                <h2>{this.state.busca}</h2>
            </div>
            <div id="spinner">
                  {this.state.isToggled && <Spinner />}
            </div>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.movies
})

export default connect(mapStateToProps, { fetchMovies, cleanState })(InputSearch)