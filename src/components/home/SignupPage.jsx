import React, { useContext, useState } from 'react';
import {Link} from 'react-router-dom';
import Routes from '../../Routes';
import { HomePage } from './HomePage';
import { useForm } from '../../hooks/useForm';
import { postSignup } from '../../network/backend';
import { AuthContext } from '../auth/AuthWrapper';
import { GlobalNotificationContext } from '../common/NotificationSheet';

export const SignupPage = () => {

  const {onLogin} = useContext(AuthContext);
  const {showNotification} = useContext(GlobalNotificationContext);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [, onSubmit, onChange] = useForm((submitValues) => {
    setIsSubmitting(true);
    const {email, firstName, lastName, password, passwordConfirmation} = submitValues;
    postSignup(email, firstName, lastName, password, passwordConfirmation).then(response => {
      const {token} = response.data;
      onLogin(token);
    }, error => {
      const {error: errorMessage} = error.response.data;
      showNotification(errorMessage);
      setIsSubmitting(false);
    });
  })

  return (
    <HomePage>
      <h2 className="subtitle center">Join Reactgram and share your pics with friends</h2>
      <form onSubmit={onSubmit}>
        <input type="email" className="form-control" name="email" placeholder="Email" onChange={onChange} required/>
        <input type="text" className="form-control" name="firstName" placeholder="Nome" onChange={onChange} required/>
        <input type="text" className="form-control" name="lastName" placeholder="Sobrenome" onChange={onChange} required/>
        <input type="password" className="form-control" name="password" placeholder="Senha" onChange={onChange} required/>
        <input type="password" className="form-control" name="passwordConfirmation" placeholder="Confirme a senha" onChange={onChange} required/>
        <input type="submit" className="btn btn-primary btn-block" value="Cadastrar" disabled={isSubmitting}/>
        <p className="notice center">
          When signing up, you accept our <a href="/">terms.</a> read more about how we 
          use your data and our <a href="/">privacy policy</a>.
        </p>
      </form>
      <h2 className="subtitle center grid-divider">OR</h2>
      <Link to={Routes.LOGIN} className="btn btn-primary btn-block">Login</Link>
    </HomePage>
  );
};