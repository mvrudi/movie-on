import { CLEAN_MOVIES } from './types'

export const cleanState = () => dispatch => {
    dispatch({
        type: CLEAN_MOVIES
})}