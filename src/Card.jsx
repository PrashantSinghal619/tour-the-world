import React from "react";
import "./Card.css";

const Card = (props) => {
  const iconStyle = props.favourite ? "fas" : "far"; // fas represents the style-class for solid (highlighted) icon
  return (
    <div className="Card">
      <div className="Card-head">
        <svg
          className="placeholder"
          width="300"
          height="200"
          viewBox="0 0 300 200"
        >
          <rect width="300" height="200" rx="8" ry="8" />
        </svg>
        <div className="Card-image-wrapper">
          <img
            className="Card-image"
            src={props.imageSource}
            alt={props.name}
          />
          <button className="toggle-favourite" onClick={props.onClick}>
            <i className={`fav-icon ${iconStyle} fa-2x fa-heart`}></i>
          </button>
        </div>
      </div>
      <div className="Card-body">
        <div className="Card-name">{props.name}</div>
        <div className="Card-desc">{props.description}</div>
      </div>
    </div>
  );
};

export default Card;
