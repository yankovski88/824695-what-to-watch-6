import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";


const AddReviewForm = (props) => {
  const {onSubmit, isAddReview, isAddReviewFail} = props;
  const textarea = React.useRef();
  const textareaBtn = React.useRef();

  // const [review, addReview] = React.useState({
  //   rating: ``,
  //   review: ``,
  // });

  const COMMENT_LENGTH_MIN = 50;
  const COMMENT_LENGTH_MAX = 400;

  // const isRatingInvalid = (rating) => !rating || isNaN(rating) || !RATING_STARS.includes(parseInt(rating, 10));
  //
  // const isCommentInvalid = (comment) => !comment || comment.length < COMMENT_LENGTH_MIN || comment.length > COMMENT_LENGTH_MAX;


  const [rating, setRating] = React.useState(0);
  const [review, setReview] = React.useState(``);

  // let isAddReviewItem = isAddReview

  const handleSubmitClick = (evt) => {
    evt.preventDefault();
    // isAddReviewItem = false;
    // changeIsAddReview()
    onSubmit(rating, review); // review
  };


  const checkReview = (reviewText)=>{
    if (reviewText.length < COMMENT_LENGTH_MIN || reviewText.length > COMMENT_LENGTH_MAX) {
      return false;
    }
    return true;
  };

  // const handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   onAnswer(review);
  // };
  //
  // const handleFieldChange = (evt) => {
  //   const {name, value} = evt.target;
  //   addReview({...review, [name]: value});
  // };



  const stars = new Array(10).fill().map((el, index) =>
    <Fragment key={`star-${index}`}>
      <input
        className="rating__input"
        id={`star-${index}`}
        type="radio" name="rating"
        value={index + 1} //
        checked={index + 1 === rating} // index + 1 === rating
        onChange={() => setRating(index + 1)}
        // style={{color: `red`}}
      />
      <label
                     className="rating__label" htmlFor={`star-${index}`}>Rating {index + 1} </label>
    </Fragment>
  );

  return (
    <div className="add-review">
      <form
        action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {stars}
          </div>
        </div>

        <div className="add-review__text">
          <textarea ref={textarea} className="add-review__textarea" name="review" id="review-text"
            placeholder="Review text"
            // onChange={handleReviewChange}
            onChange={(evt) => setReview(evt.target.value)}

          ></textarea>
          <div className="add-review__submit">
            <button
              ref={textareaBtn}
              disabled = {checkReview(review) && isAddReview && rating !== 0 ? false : true}
              className="add-review__btn" type="submit"
              onClick={handleSubmitClick}>Post</button>
          </div>

        </div>
      </form>
      {isAddReviewFail &&
      <p className="add-review__error">
        An error occurred while sending the review. Please try again later.
      </p>
      }
    </div>

  );
};

AddReviewForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isAddReview: PropTypes.bool.isRequired,
  isAddReviewFail: PropTypes.bool.isRequired,
};

export {AddReviewForm};

const mapStateToProps = (state)=>({
  isAddReview: state.isAddReview,
  isAddReviewFail: state.isAddReviewFail,
});

export default connect(mapStateToProps, null)(AddReviewForm);
