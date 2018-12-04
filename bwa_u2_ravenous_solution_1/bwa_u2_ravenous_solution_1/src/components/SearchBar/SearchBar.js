//import react and SearchBar.css
import React from 'react';
import './SearchBar.css';

/*
The SearchBar component will make it possible to search for restaurants in Ravenous. 
search bar will communicate with the Yelp API, but you'll build the functionality to communicate with the API in a later project.
Today, you'll build part of the structure that's needed to communicate with the Yelp API. 
Specifically, requests to the Yelp API must follow formatting and naming conventions set by the API. 
For example, the search bar should allow users to search businesses by:

Best Match
Highest Rated
Most Reviewed

To achieve this, you'll create an object with keys and values that conform to what the API expects to receive 
(https://www.yelp.com/developers/documentation/v3/business_search). Let's see what this looks like.
Start by creating an object called sortByOptions.

Next, set the values. Use the API documentation to help you set the values of those keys. 
The sort_by entry in the table of the "Parameters" section will be helpful. The values should be strings. 
See if you can find the keys before looking at the hint.
*/
const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {
/*
The purpose of renderSortByOptions() method is to dynamically create the list items needed to display the sort options 
(Best Match, Highest Rated, Most Reviewed). This is to help future proof against potential changes to the Yelp API.

The method should iterate through the keys and values of the sortByOptions object and return a list item. 
The list item elements should use the keys as an attribute, and the values as content. Let's start building it out.
Start adding a return statement (no parentheses).
*/
  renderSortByOptions() {
	  /*
	  To iterate through the object, you'll need to start by accessing the keys of the sortByOptions object. 
	  Call the keys() method on the JavaScript Object library. Pass in sortByOptions as the argument.
	  
	  Now that you have access to the keys, you'll iterate through them using the map() method. 
	  Call the map() method by chaining it to the end of the line you just wrote.
	  
	  Pass a callback function to the map() method as an argument. 
	  The callback function should have one parameter called sortByOption. The callback function should also use arrow syntax.
	  
	  Now let's store the object values in a variable. Inside of the callback function, access the sortByOptions values 
	  using the sortByOption parameter of the callback function. Store values in variable called sortByOptionValue.
	  
	  On the next line, return a <li> element. The list item should have an attribute called key set to sortByOptionValue 
	  (don't forget to use curly braces to inject JavaScript). The content of the list item should be sortByOption. 
	  Again, use curly braces to achieve the JavaScript injection.
	  */
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
  }

  /*
  Let's build the structure of <SearchBar />
  */
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;