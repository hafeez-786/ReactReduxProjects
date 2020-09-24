import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchMovie, fetchMovies, setLoading } from '../../actions/searchAction'

export class SearchForm extends Component {

  onChangeHandler = e => {
    this.props.searchMovie(e.target.value);
  }

  onSubmitHandler = e => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    this.props.setLoading();
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          <h1 className="display-4 mb-3">
            <i className="fa fa-search">
              &nbsp; Search for a movie, TV Series..
            </i>
          </h1>
          <form id="search-form" onSubmit={this.onSubmitHandler}>
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search Movies, TV Series..."
              onChange={this.onChangeHandler}
            />
            <button type="submit" className="btn btn-primary btn-bg mt-3">
              Search
            </button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  text: state.movies.text
})

export default connect(mapStateToProps,
  { searchMovie, fetchMovies, setLoading })(SearchForm)

