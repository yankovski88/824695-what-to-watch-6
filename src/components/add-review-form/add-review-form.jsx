import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";


const AddReviewForm = (props) => {
  const {onSubmit, isAddReview} = props;
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


  const [rating, setRating] = React.useState(1);
  const [review, setReview] = React.useState(``);

  // let isAddReviewItem = isAddReview

  // console.log(isAddReviewItem)
  const handleSubmitClick = (evt) => {
    evt.preventDefault();
    // isAddReviewItem = false;
    // changeIsAddReview()
    onSubmit(rating, review); // review

  };



  const checkReview = (review)=>{
    if(review.length < COMMENT_LENGTH_MIN || review.length > COMMENT_LENGTH_MAX){
      return false
    }
    return true
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
      />
      <label className="rating__label" htmlFor={`star-${index}`}>Rating {index + 1} </label>
    </Fragment>
  );

console.log(isAddReview)

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
              disabled = {checkReview(review) && isAddReview ? false : true}
              className="add-review__btn" type="submit"
              onClick={handleSubmitClick}>Post</button>
          </div>

        </div>
      </form>
    </div>

  );
};

AddReviewForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export {AddReviewForm};
const mapStateToProps = (state)=>({
  isAddReview: state.isAddReview,
});

const mapDispatchToProps = (dispatch)=>({
//   changeIsAddReview (){
//     dispatch(ActionCreator.changeIsAddReview(false))
// }
})

export default connect (mapStateToProps, mapDispatchToProps)(AddReviewForm) // mapDispatchToProps
