import React from 'react';
import './BusinessList.css';

import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
	  /*
	  removed <Business /> components from part 1 as we don't need to simulate returned business anymore.
	  When the businesses prop is set in the BusinessList component, there should be some functionality behind it. 
	  Specifically, it should iterate through the businesses array. Recall that you created an array of businesses in App.js. 
	  
	  Open BusinessList.js. Remove everything inside of the BusinessList div (the repeated components). 
	  Inside of the BusinessList div, access the businesses prop and call the .map() method on it.
	  
	  Inside of the map() method, pass a callback function with one parameter called business.
	  
	  The callback (call-later) function should return a <Business /> component. The returned <Business /> should have a property called business. 
	  Set the property equal to the parameter of the callback function. (Don't forget your curly braces and semicolon!)
	  
	  Review: Created a list of businesses using an array, rather than repeating components in BusinessList.js
	  Built functionality for the BusinessList component to iterate through the array and return Business components.
	  
	  */
        {
          this.props.businesses.map(business => { {/*functionality behind <BusinessList businesses={businesses} /> in App.js, it iterates through businesses array in App.js*/}
            return <Business business={business} />
          })
        }
      </div>
    );
  }
}

export default BusinessList;