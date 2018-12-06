import React from 'react';
import './SearchBar.css';

/*
search bar options will reflect changes in their state when they are clicked, and the "Let's Go" button will respond to click events.
*/
class SearchBar extends React.Component {
	//create constructor part 3,
  constructor(props) {
    super(props);

	/*
	sets initial state of search bar. 
	term will refer to the search term located in the search input. 
	location will refer to the location to search near from the location input.
	sortBy will represent the selected sortign option to use.
	
	the first two keys should be set to empty strings (''). 
	the last key should be set to 'best_match'. this completes the constructor.
	*/
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };

	//bindings to methods.
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    

    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };
  }

  /*
  getSortByClass method returns the current CSS class of the sort options, 
  returning whether or not each one should be styled as if it has been selected.
  */
  getSortByClass(sortByOption) {
	  /*
	  check if the state value of sortBy is equal to the provided sortByOptions. 
	  if it is, return 'active', otherwise return an empty string ('')
	  */
    if (this.state.sortBy === sortByOption) {
      return 'active';
    }
    return '';
  }

  /*
  handleSortByChange method sets the state of a sorting option. 
  This method will be useful when communicating with the Yelp API in the future.
  
  update the state by calling .setState() passing in an object to setState(). 
  The object should set sortBy to the value of the methods argument.
  */
  handleSortByChange(sortByOption) {
    this.setState({sortBy: sortByOption});
  }

  /*
  handle changes in the two input elements. specifically, it will need to handle changes in "terms" (businesses) and "location" (location to search in)
  */
  handleTermChange(event) {
    this.setState({term: event.target.value});
  }

  /*
  handle changes in the two input elements. specifically, it will need to handle changes in "terms" (businesses) and "location" (location to search in)
  */
  handleLocationChange(event) {
    this.setState({location: event.target.value});
  }
  
  handleSearch(event) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);

	//prevents default action of clicking a link from triggering at the end of the method.
    event.preventDefault();
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (<li className={this.getSortByClass(sortByOptionValue)} {/*conditionally styles each sort by option, displaying which sorting options currently selected*/}
                  key={sortByOptionValue}
				  {/*this will allow us to both bind the current value of this, but also bind the current sortByOptionValue
				  as the first argument to the method call, ensuring the method is called with the approrpiate value when clicked*/}
                  onClick={this.handleSortByChange.bind(this, sortByOptionValue)}> 
                {sortByOption}
             </li>);
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
		{/*using the handleTermChange and handleLocationChange methods.*/}
          <input placeholder="Search Businesses" onChange={this.handleTermChange} />
          <input placeholder="Where?" onChange={this.handleLocationChange}/>
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;