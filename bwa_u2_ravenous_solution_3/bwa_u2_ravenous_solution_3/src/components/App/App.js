import React from 'react';
import './App.css';

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

/*
Welcome to the third part of the Ravenous project! 
Take a minute to review what you accomplished in the second part of this project. You:

Moved business information to the container component (App)
Passed information from parent components (App) to child components (BusinessList, Business)
In this project, you'll complete the third part of Ravenous: Setting the State of Ravenous Components.

Certain components will need to handle changes in their state. 
For example, the sorting options in the search bar will change (and we'll need to know their state when communicating with the Yelp API). 
The same goes for the two input elements. These are the kinds of changes you'll handle in this project.

A few notes before getting started:

You should expect to spend more than 1 day on this specific project. It's OK if it is not all finished in one day.
If you don't understand how to implement a certain part of the project, we'll provide guidance as needed. 
However, you should expect to search Codecademy for the exercises that will provide you with the relevant information.
Let's get started!

If you get stuck during this project, check out the project walkthrough video which can be found at the bottom of the page after the final step of the project.
*/

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Bordertown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

const businesses = [
  business,
  business,
  business,
  business,
  business,
  business
];

class App extends React.Component {
	/*
	build functionality that simulates what a search might look like. 
	*/
  searchYelp(term, location, sortBy) {
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={businesses} />
      </div>
    );
  }
}

export default App;