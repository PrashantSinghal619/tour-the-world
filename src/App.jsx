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
      imageSource: "https://source.unsplash.com/g-krQzQo9mI/300x200",
      favourite: checkFavourite("London")
    },
    {
      name: "The Alps",
      description: "Do you dare take the hike?",
      imageSource: "",
      favourite: checkFavourite("The Alps")
    },
    {
      name: "Nepal",
      description: "Land of the enlightened",
      imageSource: "",
      favourite: checkFavourite("Nepal")
    },
    {
      name: "Hawaii",
      description: "Get lost in the sea",
      imageSource: "",
      favourite: checkFavourite("Hawaii")
    },
    {
      name: "Malaysia",
      description: "Truly Asia",
      imageSource: "",
      favourite: checkFavourite("Malaysia")
    },
    {
      name: "Australia",
      description: "Country down under",
      imageSource: "",
      favourite: checkFavourite("Australia")
    },
    {
      name: "Mariana Trench",
      description: "How deep can you go?",
      imageSource: "",
      favourite: checkFavourite("Mariana Trench")
    },
    {
      name: "Scandinavia",
      description: "Chill to the core",
      imageSource: "",
      favourite: checkFavourite("Scandinavia")
    },
    {
      name: "Dubai",
      description: "As-salamu alaykum",
      imageSource: "",
      favourite: checkFavourite("Dubai")
    },
    {
      name: "Machu Pichu",
      description: "Rediscover the beauty within this ancient city's ruins",
      imageSource: "",
      favourite: checkFavourite("Machu Pichu")
    }
  ]);

  // Update locations' favourite property in the local app state as well as client's local storage
  const toggleFavourite = locationName => {
    let newLocations;

    const matchedLocationIndex = locations.findIndex(
      location => location.name === locationName
    );

    if (matchedLocationIndex !== -1) {
      newLocations = [...locations];
      newLocations[matchedLocationIndex]["favourite"] = !locations[
        matchedLocationIndex
      ]["favourite"];

      window.localStorage.setItem(
        "favourites",
        JSON.stringify(
          newLocations.filter(location => location.favourite === true)
        )
      );
    }

    setLocations(newLocations);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Home
                {...props}
                appData={locations}
                onClick={locationName => toggleFavourite(locationName)}
              />
            )}
          />
          <Route
            path="/favourite-places"
            render={props => (
              <FavouritePlaces
                {...props}
                appData={locations.filter(
                  location => location.favourite === true
                )}
                onClick={locationName => toggleFavourite(locationName)}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

/**
 * Tells whether a location is favourited by user
 * @param {string} locationName The name of the location to check
 * @returns {boolean} isFavourite
 */
function checkFavourite(locationName) {
  const isFavourite =
    JSON.parse(window.localStorage.getItem("favourites")).findIndex(
      location => location.name === locationName
    ) !== -1
      ? true
      : false;
  return isFavourite;
}
