import React from "react";
import RatingIcon from "./RatingIcon";
import "./style.css";
import axios from "axios";


function RatingContainer({ ratingArray, id }) {

  const [rating, setRating] = React.useState(0);
  const [hoverRating, setHoverRating] = React.useState(0);

  const onMouseEnter = (index) => {
    setHoverRating(index);
  };
  const onMouseLeave = () => {
    setHoverRating(0);
  };

  const onSaveRating = (index) => {
    axios.post("/api/tacoShops/update", { index, id });
    setRating(index);
    window.location.reload();
  };
  return (
    <>

      <div className="d-flex justify-content-end mr-3 mb-2">
        <strong>Been Here? Rate this Spot: &nbsp; </strong>

        {[1, 2, 3, 4, 5].map((index) => {
          return (
            <RatingIcon
              index={index}
              rating={rating}
              hoverRating={hoverRating}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onSaveRating={onSaveRating}
            />
          );
        })}
      </div>
    </>
  );
}

export default RatingContainer;
