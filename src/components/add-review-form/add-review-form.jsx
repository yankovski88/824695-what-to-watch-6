import React from "react";
import PropTypes from "prop-types";

const AddReviewForm = (props) => {
  const {onAnswer, onSubmit} = props;
  // const [review, addReview] = React.useState({
  //   rating: ``,
  //   review: ``,
  // });

  const [rating, addRating] = React.useState(``);
  const [review, addReview] = React.useState(``);

  const handleRatingChange = (evt) => {
    const {value} = evt.target;
    addRating({value});
  };


console.log(rating)
  const handleSubmitClick = (evt) => {
    evt.preventDefault();
    onSubmit(2, `review`); // review
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

  return (
    // <></>
    <div className="add-review">
      <form
        // onSubmit={handleSubmit}
        action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            <input className="rating__input" id="star-1" type="radio" name="rating" value="1"
              // onChange={handleFieldChange}
              //      onChange={addRating(1)}
                   onChange={handleRatingChange}

            />
            <label className="rating__label" htmlFor="star-1">Rating 1</label>

            <input className="rating__input" id="star-2" type="radio" name="rating" value="2"
              // onChange={handleFieldChange}
                   onChange={addRating(2)}

            />
            <label className="rating__label" htmlFor="star-2">Rating 2</label>

            {/*<input className="rating__input" id="star-3" type="radio" name="rating" value="3"*/}
            {/*  // onChange={handleFieldChange}*/}
            {/*       onChange={addRating(3)}*/}

            {/*/>*/}
            {/*<label className="rating__label" htmlFor="star-3">Rating 3</label>*/}

            {/*<input className="rating__input" id="star-4" type="radio" name="rating" value="4"*/}
            {/*  // onChange={handleFieldChange}*/}
            {/*       onChange={addRating(4)}*/}

            {/*/>*/}
            {/*<label className="rating__label" htmlFor="star-4">Rating 4</label>*/}

            {/*<input className="rating__input" id="star-5" type="radio" name="rating" value="5"*/}
            {/*  // onChange={handleFieldChange}*/}
            {/*       onChange={addRating(5)}*/}

            {/*/>*/}
            {/*<label className="rating__label" htmlFor="star-5">Rating 5</label>*/}

            {/*<input className="rating__input" id="star-6" type="radio" name="rating" value="6"*/}
            {/*  // onChange={handleFieldChange}*/}
            {/*       onChange={addRating(6)}*/}

            {/*/>*/}
            {/*<label className="rating__label" htmlFor="star-6">Rating 6</label>*/}

            {/*<input className="rating__input" id="star-7" type="radio" name="rating" value="7"*/}
            {/*  // onChange={handleFieldChange}*/}
            {/*       onChange={addRating(7)}*/}

            {/*/>*/}
            {/*<label className="rating__label" htmlFor="star-7">Rating 7</label>*/}
            {/*/!* defaultChecked*!/*/}
            {/*<input className="rating__input" id="star-8" type="radio" name="rating" value="8"*/}
            {/*  // onChange={handleFieldChange}*/}
            {/*       onChange={addRating(8)}*/}

            {/*/>*/}
            {/*<label className="rating__label" htmlFor="star-8">Rating 8</label>*/}

            {/*<input className="rating__input" id="star-9" type="radio" name="rating" value="9"*/}
            {/*  // onChange={handleFieldChange}*/}
            {/*       onChange={addRating(9)}*/}

            {/*/>*/}
            {/*<label className="rating__label" htmlFor="star-9">Rating 9</label>*/}

            {/*<input className="rating__input" id="star-10" type="radio" name="rating" value="10"*/}
            {/*  // onChange={handleFieldChange}*/}
            {/*       onChange={addRating(10)}*/}

            {/*/>*/}
            {/*<label className="rating__label" htmlFor="star-10">Rating 10</label>*/}
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review" id="review-text"
            placeholder="Review text"
            // onChange={handleFieldChange}
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
  onAnswer: PropTypes.func.isRequired,

};
export default AddReviewForm;
