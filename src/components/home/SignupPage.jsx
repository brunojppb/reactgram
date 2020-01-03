import React from 'react';
import {Link} from 'react-router-dom';
import Routes from '../../Routes';
import { HomePage } from './HomePage';

export const SignupPage = () => {
    return (
      <HomePage>
        <h2 className="subtitle center">Crie sua sua conta e compartilhe suas fotos com amigos e família</h2>
        <form>
          <input type="email" className="form-control" name="email" placeholder="Email" required/>
          <input type="text" className="form-control" name="firstName" placeholder="Nome" required/>
          <input type="text" className="form-control" name="lastName" placeholder="Sobrenome" required/>
          <input type="password" className="form-control" name="password" placeholder="Senha" required/>
          <input type="submit" className="btn btn-primary btn-block" value="Cadastrar" required/>
          <p className="notice center">
            Ao se cadastrar, você aceita nossos <a href="/">Termos.</a> Entenda como coletamos, 
            usamos e compartilhamos seus dados em nossa <a href="/">Politica de Privacidade</a> e como usamos cookies em nossa Política de Cookies.
          </p>
        </form>
        <h2 className="subtitle center grid-divider">OU</h2>
        <Link to={Routes.LOGIN} className="btn btn-primary btn-block">Login</Link>
      </HomePage>
    );
};