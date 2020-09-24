import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING } from './types';
import axios from 'axios';
import { APIKey } from '../APIKey';

export const searchMovie = text => dispatch => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text
  })
}

// Below code for movie results
export const fetchMovies = text => dispatch => {
  axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
    .then(response => dispatch({
      type: FETCH_MOVIES,
      payload: response.data
    }))
    .catch(err => console.log(err))
};

// Below code for single movie information 
export const fetchMovie = id => dispatch => {
  axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
    .then(response => dispatch({
      type: FETCH_MOVIE,
      payload: response.data
    }))
    .catch(err => console.log(err))
}

export const setLoading = () => {
  return {
    type: LOADING
  }
}