import React from "react";

class Home extends React.Component {
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.location.state === "homeActive") {
      window.location.reload();
    }
  }
  render() {
    return <div className="Home">You are on Home page</div>;
  }
}

export default Home;
