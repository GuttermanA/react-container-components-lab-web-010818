// Code SearchableMovieReviewsContainer Here

import React from 'react'
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;




class SearchableMovieReviewsContainer extends React.Component {
  state = {
    reviews: [],
    searchTerm: ""
  }

  handleInput = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(BASE_URL + this.state.searchTerm)
      .then(res => res.json())
      .then(reviews => this.setState({reviews: reviews.results}))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleInput} value={this.state.searchTerm} placeholder="Enter Movie Name"></input>
          <button type="submit">Submit</button>
        </form>
        {this.state.reviews.length > 0 ? (
          <div>
            <h2>Searched Reviews</h2>
            <MovieReviews  reviews={this.state.reviews}/>
          </div>
        ): null}
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
