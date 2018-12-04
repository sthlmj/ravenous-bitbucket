import React from 'react';
import './Business.css';

class Business extends React.Component {
  render() {
    return (
      <div className="Business">
        <div className="image-container">
		/*
		Review: With the changes in part 2 in App.js and BusinessList.js, however the Busienss component will have to 
		access business information differently.
		
		business object was removed(moved to App.js), statements like {business.imageSrc} will no longer work.
		business info now has to be accessed via the business prop in BusinessList.js, modify all statements to {this.props.component.object-name}
		*/
          <img src={this.props.business.imageSrc} alt=''/>
        </div>
        <h2>{this.props.business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{this.props.business.address}</p>
            <p>{this.props.business.city}</p>
            <p>{`${this.props.business.state} ${this.props.business.zipCode}`}</p>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.business.category.toUpperCase()}</h3>
            <h3 className="rating">{`${this.props.business.rating} stars`}</h3>
            <p>{`${this.props.business.reviewCount} reviews`}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;