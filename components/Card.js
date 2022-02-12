/* eslint-disable @next/next/no-img-element */
import dateFormat from "dateformat";

const Card = ({ cardInfo }) => {
  return (
    <div className="card">
      <div className="card-main">
        <div className="row1">
          <img src={cardInfo["image"]} alt="" />
        </div>
        <div className="row2">
          <p>{cardInfo["product_name"]}</p>
          <p className="info-text">{cardInfo["brand_name"]}</p>
          <p>$ {cardInfo["price"]}</p>
        </div>
      </div>

      <div className="card-middle">
        <div className="product-location">
          <p className="info-text">{cardInfo["address"]["state"]}</p>
          <p className="info-text">{cardInfo["address"]["city"]}</p>
        </div>

        <p className="info-text">
          Date: {dateFormat(cardInfo["date"], "paddedShortDate")}
        </p>
      </div>

      <div className="card-footer">
        <p className="info-text">{cardInfo["discription"]}</p>
      </div>
    </div>
  );
};

export default Card;
