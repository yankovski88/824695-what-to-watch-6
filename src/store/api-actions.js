import {ActionCreator} from "./action";

export const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(ActionCreator.getAllFilms(data)))
);


// export const fetchQuestionList = () => (dispatch, _getState, api) => (
//   api.get(`/questions`)
//     .then(({data}) => dispatch(ActionCreator.loadQuestions(data)))
// );
