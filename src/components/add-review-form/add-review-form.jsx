import React, {Fragment} from "react";
import PropTypes from "prop-types";

const AddReviewForm = (props) => {
  const {onSubmit} = props;
  // const [review, addReview] = React.useState({
  //   rating: ``,
  //   review: ``,
  // });

  const [rating, setRating] = React.useState(1);
  const [review, setReview] = React.useState(``);

  const handleSubmitClick = (evt) => {
    evt.preventDefault();
    onSubmit(rating, review); // review
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


  console.log(review);


  const stars = new Array(10).fill().map((el, index) =>
    <Fragment key={`star-${index}`}>
      <input
        className="rating__input"
        id={`star-${index}`}
        type="radio" name="rating"
        value={index + 1}
        checked={index + 1 === rating}
        onChange={() => setRating(index + 1)}
      />
      <label className="rating__label" htmlFor={`star-${index}`}>Rating {index + 1} </label>
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
          <textarea className="add-review__textarea" name="review" id="review-text"
            placeholder="Review text"
            // onChange={handleReviewChange}
            onChange={(evt) => setReview(evt.target.value)}

          ></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" onClick={handleSubmitClick}>Post</button>
          </div>

        </div>
      </form>
    </div>

  );
};

AddReviewForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default AddReviewForm;
