import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";
import {getFilmData} from "./components/mock/film";
import {reviews} from "./components/mock/reviews";
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux'; // создаем хранилище
import {Provider} from 'react-redux'; // соединяем храниище и react
import {reducer} from './store/reducer';
import thunk from "redux-thunk";
import {createApi} from "./services/api";
import {ActionCreator} from "./store/action";
import {AuthorizationStatus} from "./constants/constants";
import {checkAuth} from "./store/api-actions";

// переменная с конфигурацией api
const api = createApi(
  // передаем в reduce при загрузке приложения, что авторизации не было
  ()=> store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)) // по умолчанию передали колбек, что юзер не авторизован
);

// 1. создал reducer принимать значение action и выводит новый массив фильмов
// 2. создал action который может приходить
// 3. создал store это хранилище
// 4. нужно создать createAction научим все компоненты которые оборачивает Provider обращаться к store

// создали stare хранилище
const store = createStore(
    reducer, // функция которая обновляет хранилище по action
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))) // передали инструменты разработчика
    // composeWithDevTools () это девтулс для redux в браузере. Все переданное в него он к этому присоедиянется.
    // applyMiddleware это библиотека посредник, нужна если хотим сделать асинхронный код у нас пока везде был синхронный
    // thunk это аргумент Middleware, если понадобятся еще аргументы, то добавятся через запятую (я думаю там где api)
// withExtraArgument если нужно добавлять аргумент типа api, то пишем чтобы добавить аргументы
);

//?
store.dispatch(checkAuth()); // при загрузке сайта проверяем или авторизирован юзер и отправляем данные в reduce
// это нужно если пользователь захотел сразу перейте по ссылке в которой не авторизовался

// const firstMainFilms = getFilmData().slice(0, 8);
const myListFilms = getFilmData().slice(0, 2);
// const movie = firstMainFilms[0];
// const likeFilms = getFilmData().slice(9, 13);
//
//
// export const mainFilms = [...firstMainFilms, ...likeFilms]; // хранилище всех фильмов

ReactDom.render(
    // обернули все приложение, теперь есть доступ к хранилищу
    <Provider store={store}>
      <App
        // mainFilms={mainFilms}
        myListFilms={myListFilms}
        reviews={reviews}
        // movie={movie}
      />
    </Provider>,

    document.querySelector(`#root`)
);


