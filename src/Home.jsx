import React from "react";
import Header from "./Header";

class Home extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { title: "Tour The World" };
    this.title = "Tour The World";
    document.title = this.title;
  }

  // Page reload on same page link visit
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.location.state["status"] === "homeActive") {
      window.location.reload();
    }
  }

  render() {
    return (
      <div className="Home">
        <Header title={this.title}></Header>
        You are on Home page
      </div>
    );
  }
}

export default Home;
