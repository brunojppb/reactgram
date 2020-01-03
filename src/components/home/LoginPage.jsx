import React from 'react';
import { Link } from 'react-router-dom';
import { HomePage } from './HomePage';
import Routes from '../../Routes';


export const LoginPage = () => {
    return (
      <HomePage>
        <form>
          <input type="email" className="form-control" name="email" placeholder="Email" required/>
          <input type="password" className="form-control" name="password" placeholder="Senha" required/>
          <input type="submit" className="btn btn-primary btn-block" value="Entrar" required/>
        </form>
        <h2 className="subtitle center grid-divider">OU</h2>
        <Link to={Routes.INDEX} className="btn btn-primary btn-block">Criar Nova Conta</Link>
      </HomePage>
    );
};