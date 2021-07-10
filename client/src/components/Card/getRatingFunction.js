import StarIcon from "../StarRating/StarIcon";

function getRating(averageRating) {
    let ratingNumber = parseInt(averageRating);
    switch (true) {
        case ratingNumber >= 4 && ratingNumber < 5:
            return (
                <div className="row">
                    <StarIcon fill="green" />
                    <StarIcon fill="green" />
                    <StarIcon fill="green" />
                    <StarIcon fill="green" />
                    <StarIcon fill="none" />
                </div>
            );
        case ratingNumber >= 3 && ratingNumber < 4:
            return (
                <div className="row">
                    <StarIcon fill="green" />
                    <StarIcon fill="green" />
                    <StarIcon fill="green" />
                    <StarIcon fill="none" />
                    <StarIcon fill="none" />
                </div>
            );
        case ratingNumber >= 2 && ratingNumber < 3:
            return (
                <div className="row">
                    <StarIcon fill="green" />
                    <StarIcon fill="green" />
                    <StarIcon fill="none" />
                    <StarIcon fill="none" />
                    <StarIcon fill="none" />
                </div>
            );
        case ratingNumber >= 1 && ratingNumber < 2:
            return (
                <div className="row">
                    <StarIcon fill="green" />
                    <StarIcon fill="none" />
                    <StarIcon fill="none" />
                    <StarIcon fill="none" />
                    <StarIcon fill="none" />
                </div>
            );
        default:
            return <p>This Restaurant Has Not Yet Been Rated!</p>;
    }
}

export default getRating