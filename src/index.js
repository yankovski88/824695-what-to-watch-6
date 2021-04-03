import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux'; // создаем хранилище
import {Provider} from 'react-redux'; // соединяем храниище и react
import {reducer} from './store/reducer';
import thunk from "redux-thunk";
import {createApi} from "./services/api";
import {ActionCreator} from "./store/action";
import {AuthorizationStatus} from "./constants/constants";
import {checkAuth} from "./store/api-actions";
import {redirect} from "./store/middlewares/redirect";
import "./main.css";


// переменная с конфигурацией api
const api = createApi(
    // передаем в reduce при загрузке приложения, что авторизации не было
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)) // по умолчанию передали колбек, что юзер не авторизован
);


// создали stare хранилище
const store = createStore(
    reducer, // функция которая обновляет хранилище по action
    composeWithDevTools( // передали инструменты разработчика
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    ),
    // composeWithDevTools () это девтулс для redux в браузере. Все переданное в него он к этому присоедиянется.
    // applyMiddleware это библиотека посредник, нужна если хотим сделать асинхронный код у нас пока везде был синхронный
    // thunk это аргумент Middleware, если понадобятся еще аргументы, то добавятся через запятую (я думаю там где api)
    // withExtraArgument если нужно добавлять аргумент типа api, то пишем чтобы добавить аргументы
);

store.dispatch(checkAuth()); // при загрузке сайта проверяем или авторизирован юзер и отправляем данные в reduce
// это нужно если пользователь захотел сразу перейте по ссылке в которой не авторизовался


ReactDom.render(
    // обернули все приложение, теперь есть доступ к хранилищу
    <Provider store={store}>
      <App/>
    </Provider>,

    document.querySelector(`#root`)
);


