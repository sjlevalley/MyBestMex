import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

function ShopCard({
  imagePath,
  address,
  featuredFood,
  avgRating,
  id,
  shopName,
  src,
  location,
}) {
  const history = useHistory();

  const redirect = () => {
    history.push(`/shop/${id}`);
  };


  return (
    <div
      className="card p-2 m-1 shopCard col-12 col-sm-12 col-md-4 col-lg-2"
      style={{ width: "20rem" }}
      onClick={redirect}
    >
      {/* <img className="card-img-top card-image-control" src={src} alt={src} /> */}
      <img className="card-img-top card-image-control" src={imagePath} alt={imagePath} />
      <div className="card-body">
        <h4 className="card-title" name={shopName}>
          {shopName}
        </h4>
        <p className="card-text textBox">{location}</p>
        <p className="card-text textBox">{address}</p>
        <p className="card-text"><strong>Featured Food: </strong> {featuredFood}</p>
        <p className="card-text"><strong>Rating:</strong> {avgRating.toFixed(1)} / 5</p>
      </div>
    </div>
  );
}
export default ShopCard;
