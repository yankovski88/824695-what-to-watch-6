import axios from "axios";

const BACKEND_URL = `https://6.react.pages.academy/wtw`; // url на который отправим запрос
const REQUEST_TIMEOUT = 5000; // время для запроса
const HttpCode = {
  UNAUTHORIZED: 401 // 401 ошибка означает, что в авторизации отказано
};

// console.log(api.get(data))
// console.log(axios.get(`https://6.react.pages.academy/wtw`))

// axios.get("https://6.react.pages.academy/wtw/films/promo")
//   .then(function (response) {
//     console.log(response);
//   })


// создадим функцию по конфигу, она возвращает объект с конфигом
export const createApi = (onUnauthorized)=>{
  // чтобы постоянно не писать config можно создать функцию конфигурации экземпляра axios для запроса
  const api = axios.create({
    baseURL: BACKEND_URL, // url для запроса
    timeout: REQUEST_TIMEOUT, // время для запроса
    withCredentials: true, // межсайтовые запросы управления доступом
  });
  //
  //
  // // примерно понял, если успешный запрос, то верни данные еторые пришли
  // const onSuccess = (response) => response;
  //
  // // если ошибка, то деструктуризируем ее, и берем от нее response
  // const onFail = (err)=>{
  //   const {response} = err;
  //
  //   if (response.status === HttpCode.UNAUTHORIZED) {
  //     onUnauthorized();
  //
  //
  //     // Бросаем ошибку, потому что нам важно прервать цепочку промисов после запроса авторизации.
  //     // Запрос авторизации — это особый случай и важно дать понять приложению, что запрос был неудачным.
  //     throw err;
  //   }
  //
  //   throw err;
  // };
  //
  //
  // api.interceptors.response.use(onSuccess, onFail);

  return api;

};


// console.log(onSuccess)

//
// export const createAPI = (onUnauthorized) => {
//   const api = axios.create({
//     baseURL: BACKEND_URL,
//     timeout: REQUEST_TIMEOUT,
//     withCredentials: true,
//   });
//
//   const onSuccess = (response) => response;
//
//   const onFail = (err) => {
//     const {response} = err;
//
//     if (response.status === HttpCode.UNAUTHORIZED) {
//       onUnauthorized();
//
//       // Бросаем ошибку, потому что нам важно прервать цепочку промисов после запроса авторизации.
//       // Запрос авторизации — это особый случай и важно дать понять приложению, что запрос был неудачным.
//       throw err;
//     }
//
//     throw err;
//   };
//
//   api.interceptors.response.use(onSuccess, onFail);
//
//   return api;
// };

