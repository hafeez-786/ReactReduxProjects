import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING } from '../actions/types'

const initialState = {
  text: '', // It will use in input box for searching the text
  movies: [], // It will be use in search box for movies
  loading: false, // It will be use depened upon condition for data fetching
  movie: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        text: action.payload,
        loading: false
      };
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false
      }
    case FETCH_MOVIE:
      return {
        ...state,
        movie: action.payload,
        loading: false
      }
    case LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}