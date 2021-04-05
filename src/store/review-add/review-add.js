import {ActionType} from "../action";

const initialState = {
  isAddReview: true, // нужно чтобы бы знать или комент добавлен
  isAddReviewFail: false, // флаг на форму комента
};

export const reviewAdd = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_IS_ADD_REVIEW:
      return {
        ...state,
        isAddReview: action.payload,
        isAllComments: false,
      };
    case ActionType.IS_ADD_REVIEW_FAIL:
      return {
        ...state,
        isAddReviewFail: action.payload,
      };
    default:
      return state;
  }
};
