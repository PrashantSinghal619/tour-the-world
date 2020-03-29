import React from "react";
import Header from "./Header";

class FavouritePlaces extends React.Component {
  constructor(props) {
    super(props);
    this.title = "Favourite Places";
    document.title = this.title;
  }

  // Page reload on same page link visit
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.location.state["status"] === "favouriteActive") {
      window.location.reload();
    }
  }

  render() {
    return (
      <div className="FavouritePlaces">
        <Header title={this.title}></Header>
        You are on Favourite Places page
      </div>
    );
  }
}

export default FavouritePlaces;
