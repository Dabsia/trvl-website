import React from "react";
import "./CardItem.css";
import { Link } from "react-router-dom";

function CardItem({ label, text, src, path }) {
  return (
    <div>
      <li className="cards__items">
        <Link to={path} className="cards__item__Link">
          <figure className="cards__item__pic-wrap" data-category={label}>
            <img src={src} alt="Travel" className="cards__item__img" />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{text}</h5>
          </div>
        </Link>
      </li>
    </div>
  );
}

export default CardItem;
