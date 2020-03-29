import React from "react";

class FavouritePlaces extends React.Component {
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.location.state === "favouriteActive") {
      window.location.reload();
    }
  }
  render() {
    return (
      <div className="FavouritePlaces">You are on Favourite Places page</div>
    );
  }
}

export default FavouritePlaces;
