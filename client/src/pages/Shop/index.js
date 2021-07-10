import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { singleShopAPI } from "../../util/shopAPI";
import { shopReviewAPI } from "../../util/shopAPI";
import { useAuth } from "../../util/auth";
import FeaturedCard from "../../components/Card/FeaturedCard";
import ReviewCard from "../../components/Card/ReviewCard";
import VallartasPic from "../../images/ts9.jpg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ShopPage() {
  const auth = useAuth();
  const [userName, setUserName] = useState("");
  const [reviewsArray, setReviewsArray] = useState([]);
  const id = useParams().id;
  const [singleShop, setSingleShop] = useState({ rating: [] });
  const [reviewInput, setReviewInput] = useState("");

  const ratingArray = singleShop.rating;

  useEffect(() => {
    singleShopAPI(id)
      .then((res) => setSingleShop(res))
      .catch(console.error());
  }, [id]);

  useEffect(() => {
    shopReviewAPI(id)
      .then((res) => setReviewsArray(res))
      .catch(console.error());
  }, [id]);

  useEffect(() => {
    {
      auth.isLoggedIn() ? setUserName(auth.user.username) : console.log("");
    }
  }, [auth]);

  function getAvg(ratingArray) {
    const total = ratingArray.reduce((acc, c) => acc + c, 0);
    return total / ratingArray.length;
  }

  function handleSubmit(event) {
    const reload = () => window.location.reload();
    let shopId = singleShop._id;
    event.preventDefault();
    axios.post("/api/reviews", { userName, shopId, reviewInput });
    toast.success(`Review Submitted!`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(window.location.reload.bind(window.location), 1500);
  }

  function handleInputChange(event) {
    event.preventDefault();
    setReviewInput(event.target.value);
  }

  function renderReviews() {
    if (reviewsArray.length < 1) {
      return (
        <>
          <hr />
          <h5 className="reviews-title">
            No Reviews Found! Be the first to review this restaurant by typing
            your review in below!
          </h5>
          <hr />
        </>
      );
    } else
      return reviewsArray
        .map((review) => (
          <ReviewCard
            reviewDate={review.createdAt}
            reviewText={review.text}
            userName={review.userName}
          />
        ))
        .reverse();
  }

  return (
    <>
      <div className="container-fluid m-2" id="pageTop">
        <div className="">
          <div className="col d-flex justify-content-center" id="pageTop">
            <FeaturedCard
              src={VallartasPic}
              id={singleShop._id}
              menuURL={singleShop.menuURL}
              shopName={singleShop.shopName}
              imagePath={singleShop.imagePath}
              description={singleShop.description}
              location={singleShop.location}
              phone={singleShop.phone}
              address={singleShop.address}
              numOfRatings={ratingArray.length}
              rating={getAvg(ratingArray).toFixed(1)}
              featuredFood={singleShop.featuredFood}
            />
          </div>
        </div>
      </div>
      <div className="container-fluid m-2">{renderReviews()}</div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 submitreview-control">
            {/* <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            /> */}
            {auth.isLoggedIn() ? (
              <>
                <h3>Submit Your Review in the Box Below:</h3>

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      type="text"
                      onChange={handleInputChange}
                      value={reviewInput}
                      id="newReview"
                      aria-describedby="submitReviewBox"
                      placeholder="Type your Review Here..."
                    />
                  </div>
                  <button
                    type="submit"
                    value={reviewInput}
                    id="reviewFormButton"
                    className="btn btn-primary nav-buttons shop-submit"
                  >
                    Submit
                  </button>
                </form>
              </>
            ) : (
              <>
                <hr />
                <h4>
                  Want to submit a review? <Link to="/login">Login </Link>or{" "}
                  <Link to="/signup"> Sign Up &nbsp;</Link>!
                </h4>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopPage;
