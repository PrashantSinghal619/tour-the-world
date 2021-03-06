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
  componentDidUpdate(prevProps) {
    if (prevProps.location.key !== this.props.location.key) {
      window.location.reload();
    }
  }

  render() {
    return (
      <div className="FavouritePlaces">
        <Header title={this.title}></Header>
        <div className="card-stash">
          {this.props.appData.map((location, index) => (
            <Card
              key={index}
              {...location}
              onClick={() => this.props.onClick(location.name)}
              favourite={location.favourite}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default FavouritePlaces;
