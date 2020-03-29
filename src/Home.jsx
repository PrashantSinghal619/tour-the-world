import React from "react";
import Header from "./Header";

class Home extends React.Component {
  title = this.props.location.state["title"];

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.location.state["status"] === "homeActive") {
      window.location.reload();
    }
  }

  componentDidMount() {
    document.title = this.title;
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
