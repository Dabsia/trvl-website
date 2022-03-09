import React from "react";
import CardItem from "../CardItems/CardItem";
import "./Cards.css";
import img9 from "../../assets/img-9.jpg";
import img2 from "../../assets/img-2.jpg";
import img5 from "../../assets/img-5.jpg";
import img4 from "../../assets/img-4.jpg";

function Cards() {
  return (
    <div>
      <h1>Check out these EPIC Destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img2}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={img9}
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img5}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={img4}
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Pleasure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
