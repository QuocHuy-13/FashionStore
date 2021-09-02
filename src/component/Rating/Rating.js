import React from 'react';
import './Rating.css'
import {FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa'

const Rating = (props) => {
    const Stars = () => {
        let stars = [] ;
        let ratingsValue = props.rating.star_ratings;
        let floorRatingValue = Math.floor(ratingsValue);
        let remainingRatingsValue = (ratingsValue - floorRatingValue).toFixed(1);
        let defaultCount = remainingRatingsValue > 0 ? 4 : 5 ;
        let remainingRatings = defaultCount - floorRatingValue ;
        for(let i = 0; i< floorRatingValue; i++){
            stars.push(<span className="full-star-icon" key={`${i}i`}><FaStar/></span>)
        }
        if(remainingRatingsValue > 0) {
            stars.push(<span className="half-star-icon" key={'k'}><FaStarHalfAlt/></span>)
        }
        if(remainingRatings){
            for(let j=0; j<remainingRatings;j++){
                stars.push(<span className="empty-star-icon" key={`${j}j`}><FaRegStar/></span>)
            }
        }
        return stars;
    }
    return (
        <div className={props.ratingClassName} title={props.rating.star_ratings}>
            {Stars()}
            <span className="total-rating-votes">({props.rating.votes})</span>
        </div>
    );
}

export default Rating;
