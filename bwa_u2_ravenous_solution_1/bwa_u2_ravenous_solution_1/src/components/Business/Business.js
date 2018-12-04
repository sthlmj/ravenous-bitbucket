/*
Great! Now you're ready to begin creating your first React component. 
The purpose of the <Business /> component is to represent how a business (a restaurant) 
in Ravenous will be formatted and styled (results you get after a search). 
For now, we'll hard code a single business listing. Later, you'll update it dynamically using the Yelp API.
*/


import React from 'react';
//imports business.css
import './Business.css';

//javascript object named business. info here will be consumed by <Business /> component
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

//react component named Business. This Business component simulates a single business.
class Business extends React.Component {
	//render method
  render() {
	  //return statement with JSX that renders the HTML
    return (
      <div className="Business">
        <div className="image-container">
          <img src={business.imageSrc} alt=''/>
        </div>
		//reference to properties in the business object
        <h2>{business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>{`${business.state} ${business.zipCode}`}</p>
          </div>
          <div className="Business-reviews">
            <h3>{business.category.toUpperCase()}</h3>
            <h3 className="rating">{`${business.rating} stars`}</h3>
            <p>{`${business.reviewCount} reviews`}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;