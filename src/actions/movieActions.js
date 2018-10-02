import { FETCH_MOVIES } from './types'
import {config} from '../../public/api_config/api_config'

export const fetchMovies = (movie = 'batman') => dispatch => {
         fetch(`${config.API_URL}?s=${movie}&plot=full&apikey=${config.API_KEY}`)
        .then((res) => res.json())
        .then(movies => dispatch({
            type: FETCH_MOVIES,
            payload: movies.Search,
    })
    )
}