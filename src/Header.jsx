import React from "react";

const Header = props => {
  return (
    <header className="App-header">
      <h1>{props.title.toUpperCase()}</h1>
    </header>
  );
};

export default Header;
