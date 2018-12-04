import React from 'react';
import './App.css';

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

/*
The App component renders a SearchBar component and a BusinessList component. 
The final product is a simulation of how the Ravenous project will look and work. 
Some functionality (like querying the Yelp API) is currently missing, but you'll build it in the upcoming projects.

Reflect on the knowledge you used in this project. As you do so, consider the following question:

At the moment, some information (like business information) is hard coded into specific components. 
How might you pass this information dynamically between components?

We'll expand each component through the coming weeks to address the question above (and more).*/
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}

export default App;