import React from 'react';
//imports BusinessList.css into this js
import './BusinessList.css';

//imports Business components from Business.js to use within BusinessList component below
import Business from '../Business/Business';

/*
The point of the <BusinessList /> component is to simulate what a returned list of businesses would look like in Ravenous 
(after querying the Yelp API, for example). To help this simulation, <BusinessList /> will make use of the <Business /> component repeatedly. 
To use the <Business /> component, you'll have to import it.

This BusinessList component simulates a list of single businesses.
*/
class BusinessList extends React.Component {
	//render method
  render() {
	  //return statement that returns following HTML
    return (
      <div className="BusinessList">
	  //Business components below
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
      </div>
    );
  }
}

//BusinessList component will need to be rendered again by another component, export it.
export default BusinessList;