import React from "react";
import "./style.css";
import RatingContainer from "../StarRating/RatingContainer";
import getRating from "./getRatingFunction";
import { Link } from "react-router-dom";
import { useAuth } from "../../util/auth";
import { useHistory } from "react-router-dom";


function FeaturedCard({
  ratingArray,
  imagePath,
  id,
  shopName,
  menuURL,
  rating,
  numOfRatings,
  description,
  location,
  phone,
  address,
  featuredFood,
}) {

  const history = useHistory();
  const auth = useAuth();
  const redirect = () => {
    history.push(`/shop/${id}`);
  };


  return (
    <div className="col-lg-12 m-1 featureCard" onClick={redirect}>
      <div className="card-body lg-3 featuredCardBody " id="boxText">
        <div className="row">
          <div className="col-lg-3 ">
            <div className="d-flex justify-content-center">
              <h2 className="card-title" id="boxText">
                {shopName}
              </h2>
            </div>
            <hr />
            <div className="d-flex justify-content-center border border-dark m-2">
              <img
                src={imagePath}
                alt={imagePath}
                className="featured-img-control m-3 "
              />
            </div>
            <hr />
            <h5 className="card-text d-flex justify-content-center m-2" id="boxText">
              <strong>Featured Food:&nbsp;</strong>
              {featuredFood}
              <br />
            </h5>
          </div>
          <div className="col-lg-9 ">
            <div className="m-2">
              <strong>About {shopName}: </strong>{description}
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item" id="locationBox">
                <strong>Location: </strong>
                {location}
              </li>
              <li className="list-group-item" id="locationBox">
                <strong>Address: </strong>
                {address}
              </li>
              <li className="list-group-item" id="locationBox">
                <strong>Phone: </strong>
                {phone}
              </li>
              <li className="list-group-item" id="locationBox">
                <a
                  href={menuURL}
                  className="card-link"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  View Their Menu
                </a>
                <i className="ml-auto">
                  <div className="d-flex justify-content-end">
                    <strong>Average Rating: </strong>
                    &nbsp;{rating} out of 5 stars! ({numOfRatings} Ratings)
                  </div>
                  <div className="d-flex justify-content-end mr-2">
                    {getRating(rating)}
                  </div>
                </i>
              </li>
            </ul>
            <div className="mt-3">
              {auth.isLoggedIn() ? (
                <div className="">
                  <RatingContainer id={id} ratingArray={ratingArray} />
                </div>
              ) : (
                <div className="d-flex justify-content-end m-2">
                  <>
                    <Link to="/login">Login &nbsp;</Link>or{" "}
                    <Link to="/signup">&nbsp; Sign Up &nbsp;</Link> to Submit your
                    rating
                  </>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="card-body d-flex">
      </div>


    </div>
  );
}
export default FeaturedCard;
