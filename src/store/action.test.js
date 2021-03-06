import {AuthorizationStatus} from "../constants/constants";
import {ActionCreator, ActionType} from "../store/action";

export const mockMovie = {
  "name": `Macbeth`,
  "poster_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
  "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
  "background_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
  "background_color": `#F1E9CE`,
  "description": `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
  "rating": 3.3,
  "scores_count": 48798,
  "director": `Justin Kurzel`,
  "starring": [
    `Michael Fassbender`,
    `Marion Cotillard`,
    `Jack Madigan`
  ],
  "run_time": 113,
  "genre": `Drama`,
  "released": 2015,
  "id": 1,
  "is_favorite": false,
  "video_link": `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.web`
};


export const mockReviews = [
  {
    "id": 1,
    "user": {
      "id": 13,
      "name": `Zak`
    },
    "rating": 1.4,
    "comment": `This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.`,
    "date": `2021-03-07T08:04:28.658Z`
  },
  {
    "id": 2,
    "user": {
      "id": 17,
      "name": `Emely`
    },
    "rating": 7.2,
    "comment": `This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.`,
    "date": `2021-02-22T08:04:28.658Z`
  }
];


describe(`Action creators work correctly`, () => {
  it(`Action creator for setting genre returns correct action`, () => {
    // it функция для тестового случая в `Action creator` это название случая что проверяем
    const expectedAction = { // expectedAction создали объект
      type: ActionType.GENRE,
      payload: `comedy`
    };

    expect(ActionCreator.setGenre(`comedy`)).toEqual(expectedAction); // в нашу функцию послали payload `comedy`
    // и ожидаем что вернется объект как в expectedAction
    // expect это ожидание,
    // toEqual это проверка объекта на соответствие
    // toBe вроде проверка на true
  });


  it(`check btn more film`, ()=>{
    const expectedAction = {
      type: ActionType.MORE_FILM
    };
    expect(ActionCreator.moreFilm()).toEqual(expectedAction);
  });

  it(`check btn more getAllFilms`, ()=>{
    const expectedAction = {
      type: ActionType.GET_ALL_FILMS,
      payload: [mockMovie]
    };
    expect(ActionCreator.getAllFilms([mockMovie])).toEqual(expectedAction);
  });


  it(`check btn more likeFilms`, ()=>{
    const expectedAction = {
      type: ActionType.LIKE_FILMS,
      payload: [mockMovie]
    };
    expect(ActionCreator.likeFilms([mockMovie])).toEqual(expectedAction);
  });

  it(`check btn more getFilmPromo`, ()=>{
    const expectedAction = {
      type: ActionType.GET_FILM_PROMO,
      payload: mockMovie
    };
    expect(ActionCreator.getFilmPromo(mockMovie)).toEqual(expectedAction);
  });
  it(`check btn more requireAuthorization`, ()=>{
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    };
    expect(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)).toEqual(expectedAction);
  });
  it(`check btn more redirectToRoute`, ()=>{
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `/redirected-route`
    };
    expect(ActionCreator.redirectToRoute(`/redirected-route`)).toEqual(expectedAction);
  });
  it(`check btn more addRequestedRoute`, ()=>{
    const expectedAction = {
      type: ActionType.ADD_REQUESTED_ROUTE,
      payload: `/add-requeste-route`
    };
    expect(ActionCreator.addRequestedRoute(`/add-requeste-route`)).toEqual(expectedAction);
  });

  it(`check btn more getFilmById`, ()=>{
    const expectedAction = {
      type: ActionType.FILM_BY_ID,
      payload: mockMovie
    };
    expect(ActionCreator.getFilmById(mockMovie)).toEqual(expectedAction);
  });
  it(`check btn more getAllComments`, ()=>{
    const expectedAction = {
      type: ActionType.GET_ALL_COMMENTS,
      payload: mockReviews
    };
    expect(ActionCreator.getAllComments(mockReviews)).toEqual(expectedAction);
  });

  it(`check btn more addReview`, ()=>{
    const expectedAction = {
      type: ActionType.ADD_REVIEW,
      payload: true
    };
    expect(ActionCreator.addReview(true)).toEqual(expectedAction);
  });
  it(`check btn more addReviewFail`, ()=>{
    const expectedAction = {
      type: ActionType.IS_ADD_REVIEW_FAIL,
      payload: true
    };
    expect(ActionCreator.addReviewFail(true)).toEqual(expectedAction);
  });
  it(`check btn more hasErrorLogin`, ()=>{
    const expectedAction = {
      type: ActionType.HAS_ERROR_LOGIN,
      payload: true
    };
    expect(ActionCreator.hasErrorLogin(true)).toEqual(expectedAction);
  });

  it(`check btn more loggedIn`, ()=>{
    const expectedAction = {
      type: ActionType.LOGGED_IN,
      payload: {
        avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/5.jpg`,
        email: `1@mail.ru`,
        id: 1,
        name: `1`
      },
    };
    expect(ActionCreator.loggedIn({
      avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/5.jpg`,
      email: `1@mail.ru`,
      id: 1,
      name: `1`
    })).toEqual(expectedAction);
  });
});
