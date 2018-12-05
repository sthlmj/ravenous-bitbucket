import React from 'react';
import './App.css';

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

/*
So far, you've hard coded business information and rendered it manually. 
Now we'll focus on how information (like business information) can pass from component to component with less hard coding. 
This is crucial as we build towards the goal of constructing a Yelp-like clone.

When the Yelp API is implemented, a list of businesses will be returned to App.js. 
Therefore, we should create a hard-coded list of businesses there and then pass them to the appropriate components.

Review: Moved business information to App.js
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

//businesses array that holds six references to the business object
const businesses = [
  business,
  business,
  business,
  business,
  business,
  business
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
		{/* //Setting a BusinessList Prop. 
		To remove repetition of components inside of the <BusinessList /> component, add some more functionality to aid this goal. 
		<ComponentName propName={value} /> */}
        <BusinessList businesses={businesses} />
      </div>
    );
  }
}

export default App;