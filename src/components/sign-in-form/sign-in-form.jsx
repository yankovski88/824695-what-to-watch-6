import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {login} from "../../store/api-actions";
// import {useHistory} from 'react-router-dom';


const SignInForm = (props)=>{
  const {onSubmit} = props;

  const loginRef = React.useRef(); // useRef сохраняет в себе элемент разметки
  const passwordRef = React.useRef(); // сохранили пароль

  // const history = useHistory(); // нужно для маршрутизации, но здесь не используется
// <button onClick={()=> history.push(`/game`)}></button>

  // пропишем функцию на отправку формы на авторизацию
  const handleSubmit = (evt)=>{
    evt.preventDefault();

    onSubmit({ // вызываем функцию для диспача передадим туда введенные данные с полей юзера
      login: loginRef.current.value, // данные с полей инпута. current текущее значение(пишется всегда)
      password: passwordRef.current.value,
    })
  }


  return (
    <div className="sign-in user-page__content">

      <form onSubmit={handleSubmit} action="" className="sign-in__form">
        <div className="sign-in__fields">
          <div className="sign-in__field">
            <input
              ref={loginRef}
              className="sign-in__input"
              type="email"
              placeholder="Email address"
              name="user-email" id="user-email"/>
            <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
          </div>
          <div className="sign-in__field">
            <input ref={passwordRef}
                   className="sign-in__input"
                   type="password"
                   placeholder="Password"
                   name="user-password"
              id="user-password"/>
            <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
          </div>
        </div>
        <div className="sign-in__submit">
          <button className="sign-in__btn" type="submit">Sign in</button>
        </div>
      </form>

    </div>
  );
};

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch)=>({
  onSubmit(authData){
    dispatch(login(authData))
  }
})

export {SignInForm};
export default connect (null, mapDispatchToProps)(SignInForm) // mapStateToProps

