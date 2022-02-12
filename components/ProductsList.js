/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Card from "./Card";

export default function ProductsList({ brandName, cards }) {
  return (
    <div className="products-list">
      <div className="cards-container">
        <h1 className="list-header">{brandName}</h1>
        <div className="cards-region" id={brandName}>
          {cards.map((card, index) => (
            <div key={index}>
              <Card cardInfo={card} />
            </div>
          ))}
        </div>
      </div>
      <img
        src="/arrow.png"
        alt="arrow"
        className="arrow"
        onClick={() => {
          document.getElementById(`${brandName}`).scrollLeft += 200;
        }}
      />
    </div>
  );
}
