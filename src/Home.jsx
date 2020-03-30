import React from "react";
import Header from "./Header";
import Card from "./Card";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.title = "Tour The World";
    document.title = this.title;
  }

  // Page reload on same page link visit
  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   if (
  //     nextProps.location &&
  //     nextProps.location.state["status"] === "homeActive" &&
  //     nextProps.appData === this.props.appData
  //   ) {
  //     window.location.reload();
  //   }
  // }

  render() {
    return (
      <div className="Home">
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

export default Home;
