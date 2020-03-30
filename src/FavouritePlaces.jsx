import React from "react";
import Header from "./Header";
import Card from "./Card";

class FavouritePlaces extends React.Component {
  constructor(props) {
    super(props);
    this.title = "Favourite Places";
    document.title = this.title;
  }

  // Page reload on same page link visit
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (
      nextProps.location.state["status"] === "favouriteActive" &&
      nextProps.appData === this.props.appData
    ) {
      window.location.reload();
    }
  }

  render() {
    return (
      <div className="FavouritePlaces">
        <Header title={this.title}></Header>
        {this.props.appData.map((location, index) => (
          <Card
            key={index}
            {...location}
            onClick={() => this.props.onClick(location.name)}
            favourite={location.favourite}
          />
        ))}
      </div>
    );
  }
}

export default FavouritePlaces;
