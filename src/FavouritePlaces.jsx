import React from "react";
import Header from "./Header";

class FavouritePlaces extends React.Component {
  title = this.props.location.state["title"];

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.location.state["status"] === "favouriteActive") {
      window.location.reload();
    }
  }

  componentDidMount() {
    document.title = this.title;
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
