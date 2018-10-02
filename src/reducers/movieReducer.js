import { FETCH_MOVIES, CLEAN_MOVIES } from '../actions/types'

const initialState = {
    movies: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
        return { 
            ...state,
            movies: action.payload,
        }
    case CLEAN_MOVIES:
        return { 
            movies: []
    }
    default:
        return state
  }
}
