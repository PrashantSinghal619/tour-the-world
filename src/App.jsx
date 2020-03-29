import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import FavouritePlaces from "./FavouritePlaces";
import "./App.css";

function App() {
  const [locations, setLocations] = useState([
    {
      name: "London",
      description: "The older this city gets, the more it's admired",
      imageSource: "https://source.unsplash.com/g-krQzQo9mI/300x200"
    },
    {
      name: "The Alps",
      description: "Do you dare take the hike?",
      imageSource: ""
    },
    { name: "Nepal", description: "Land of the enlightened", imageSource: "" },
    { name: "Hawaii", description: "Get lost in the sea", imageSource: "" },
    { name: "Malaysia", description: "Truly Asia", imageSource: "" },
    { name: "Australia", description: "Country down under", imageSource: "" },
    {
      name: "Mariana Trench",
      description: "How deep can you go?",
      imageSource: ""
    },
    { name: "Scandinavia", description: "Chill to the core", imageSource: "" },
    { name: "Dubai", description: "As-salamu alaykum", imageSource: "" },
    {
      name: "Machu Pichu",
      description: "Rediscover the beauty within this ancient city's ruins",
      imageSource: ""
    }
  ]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Home {...props} appData={locations} />}
          />
          <Route
            exact
            path="/favourite-places"
            render={props => <FavouritePlaces {...props} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
