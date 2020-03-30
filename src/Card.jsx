import React from "react";

const Card = props => {
  const iconStyle = props.favourite ? "fas" : "far"; // fas represents the style-class for solid (highlighted) icon
  return (
    <div className="Card">
      <div className="Card-head">
        <img className="Card-image" src={props.imageSource} alt={props.name} />
        <button className="toggle-favourite" onClick={props.onClick}>
          <i className={`fav-icon ${iconStyle} fa-2x fa-heart`}></i>
        </button>
      </div>
      <div className="Card-body">
        <div className="Card-name">{props.name}</div>
        <div className="Card-desc">{props.description}</div>
      </div>
    </div>
  );
};

export default Card;
