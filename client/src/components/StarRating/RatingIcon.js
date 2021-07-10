import React from "react";
import StarIcon from "./StarIcon";

function RatingIcon(props) {
    const {
        index,
        rating,
        hoverRating,
        onMouseEnter,
        onMouseLeave,
        onSaveRating,
    } = props;
    const fill = React.useMemo(() => {
        if (hoverRating >= index) {
            return 'green';
        } else if (!hoverRating && rating >= index) {
            return 'green';
        }
        return 'none';
    }, [rating, hoverRating, index]);
    return (
        <div
            key={index}
            className="cursor-pointer"
            onMouseEnter={() => onMouseEnter(index)}
            onMouseLeave={() => onMouseLeave()}
            onClick={() => onSaveRating(index)}>
            <StarIcon fill={fill} />
        </div>
    )
};

export default RatingIcon;