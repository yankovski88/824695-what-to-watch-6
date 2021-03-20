import axios from "axios";

const BACKEND_URL = `https://6.react.pages.academy/wtw`; // url на который отправим запрос
const REQUEST_TIMEOUT = 5000; // время для запроса


// создадим функцию по конфигу, она возвращает объект с конфигом
export const createApi = ()=>{
  // чтобы постоянно не писать config можно создать функцию конфигурации экземпляра axios для запроса
  const api = axios.create({
    baseURL: BACKEND_URL, // url для запроса
    timeout: REQUEST_TIMEOUT, // время для запроса
    withCredentials: true, // межсайтовые запросы управления доступом
  });
  return api;
};


//
// const HttpCode = {
//   UNAUTHORIZED: 401
// };
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
