import {ActionType} from "../action";
import browserHistory from "../../browser-history";


export const redirect = (_store)=>(next)=>(action)=>{
if(action.type === ActionType.REDIRECT_TO_ROUTE){ // если экшен у нас определенного типа
  browserHistory.push(action.payload); // то делаем не диспачь, а хистори push
}

return next(action); // если экшен другой, то делаем next диспач и забываем
}
