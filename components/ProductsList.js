/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Card from "./Card";

export default function ProductsList({
  brandName,
  cards,
  product,
  state,
  city,
}) {
  const [cardsInfo, setCardsInfo] = useState(cards);

  useEffect(() => {
    if (!state || !product) {
      setCardsInfo(cards);
    } else if (product && state && !city) {
      setCardsInfo(
        cards.filter((card) => {
          return card["address"]["state"] === state;
        })
      );
    } else if (product && state && city) {
      setCardsInfo(
        cards.filter((card) => {
          return (
            card["address"]["state"] === state &&
            card["address"]["city"] === city
          );
        })
      );
    }
  }, [product, cards, state, city]);

  return (
    <div className="products-list">
      <div className="cards-container">
        <h1 className="list-header">{brandName}</h1>
        <div className="cards-region" id={brandName}>
          {cardsInfo.map((card, index) => (
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
