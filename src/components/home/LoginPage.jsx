import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { HomePage } from './HomePage';
import Routes from '../../Routes';
import { useForm } from '../../hooks/useForm';
import { postLogin } from '../../network/backend';
import { AuthContext } from '../auth/AuthWrapper';
import { GlobalNotificationContext } from '../common/NotificationSheet';

export const LoginPage = () => {

  const {showNotification} = useContext(GlobalNotificationContext);
  const {user, onLogin} = useContext(AuthContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();
  const [values, onSubmit, onChange] = useForm((values) => {
    const {email, password} = values;
    setIsSubmitting(true);
    postLogin(email, password).then(response => {
      const {user, token} = response.data;
      onLogin(user, token);
    }, error => {
      const {error: errorMessage} = error.response.data;
      showNotification(errorMessage);
      setIsSubmitting(false);
    });
  });

  useEffect(() => {
    if(user) {
      history.replace(Routes.TIMELINE);
    }
  }, [user, history]);

    return (
      <HomePage>
        <h2 className="subtitle center">Entre com suas credenciais</h2>
        <form onSubmit={onSubmit}>
          <input type="email" className="form-control" name="email" placeholder="Email" required onChange={onChange}/>
          <input type="password" className="form-control" name="password" placeholder="Senha" required onChange={onChange}/>
          <input type="submit" className="btn btn-primary btn-block" value="Entrar" disabled={isSubmitting}/>
        </form>
        <h2 className="subtitle center grid-divider">OU</h2>
        <Link to={Routes.INDEX} className="btn btn-primary btn-block">Criar Nova Conta</Link>
      </HomePage>
    );
};