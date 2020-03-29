import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import FavouritePlaces from "./FavouritePlaces";
import "./App.css";

function App() {
  const [title, setTitle] = useState("Tour the world");

  useEffect(() => {
    document.title = title;
  });

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favourite-places" component={FavouritePlaces} />
        </Switch>
        <header className="App-header">
          <h1>{title}</h1>
        </header>
      </div>
    </Router>
  );
}

export default App;
