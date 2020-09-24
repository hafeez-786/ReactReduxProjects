import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="col-md-3 mb-5 movieCard">
        <div className="card card-body bg-dark text-center h-100">
          <img className="card-img-top w-100 mb-2" src={movie.Poster} alt={movie.Title} />
          <h5 className="text-ligh card-title">
            {movie.Title} - {movie.Year}
          </h5>
          <Link className="btn btn-primary" to={'./movie/' + movie.imdbID}>
            Movie Details
              <i className="fas fa-chavron-right" />
          </Link>
        </div>
      </div>
    )
  }
}

export default MovieCard
