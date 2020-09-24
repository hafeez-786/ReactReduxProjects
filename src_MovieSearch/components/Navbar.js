import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
      <div className="container-fluid noPad">
        <div className="navBlock">
          <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <Link className="navbar-brand" to="/">HafeezMovieSeriesInfo</Link>
            <span className="fab fa-imdb fa-5x iconImdb"></span>
          </nav>
        </div>
      </div>
  )
}
export default Navbar