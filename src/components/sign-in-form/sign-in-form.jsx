import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {login} from "../../store/api-actions";
import {isValidEmail} from "../../utils/utils";
import classNames from 'classnames';
import {getHasErrorLogin} from "../../store/user/selectors";


const SignInForm = (props)=>{
  const {onSubmit, hasErrorLogin} = props;
  const [emailHasError, setEmailHasError] = React.useState(false);
  const [passwordHasError, setPasswordHasError] = React.useState(false);


  const loginRef = React.useRef(); // useRef сохраняет в себе элемент разметки
  const passwordRef = React.useRef(); // сохранили пароль

  // пропишем функцию на отправку формы на авторизацию
  const handleSubmit = (evt)=>{
    evt.preventDefault();
    setEmailHasError(false);
    setPasswordHasError(false);


    const email = loginRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !isValidEmail(email)) {
      setEmailHasError(true);
      return;
    }

    if (!password) {
      setPasswordHasError(true);
      return;
    }


    onSubmit({ // вызываем функцию для диспача передадим туда введенные данные с полей юзера
      login: email, // данные с полей инпута. current текущее значение(пишется всегда)
      password,
    });
  };

  const getErrorMessage = () => {
    if (hasErrorLogin) { // hasError
      return <p>We can’t recognize this email and password combination. Please try again.</p>;
    }

    if (emailHasError) {
      return <p>Please enter a valid email address</p>;
    }

    if (passwordHasError) {
      return <p>Password cannot be empty</p>;
    }

    return null;
  };

  return (
    <div className="sign-in user-page__content">

      <form onSubmit={handleSubmit} action="" className="sign-in__form">
        <div className="sign-in__message">
          {getErrorMessage()}
        </div>
        <div className="sign-in__fields">
          <div className={classNames(`sign-in__field`, {"sign-in__field--error": emailHasError})}>
            <input
              ref={loginRef}
              className="sign-in__input"
              type="email"
              placeholder="Email address"
              name="user-email" id="user-email"/>
            <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
          </div>
          <div className={classNames(`sign-in__field`, {"sign-in__field--error": passwordHasError})}>
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
  hasErrorLogin: PropTypes.bool.isRequired,
};

const mapStateToProps = (state)=>({
  hasErrorLogin: getHasErrorLogin(state),
});

const mapDispatchToProps = (dispatch)=>({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {SignInForm};
export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);

