import React from 'react';

export const SignupForm = () => {
    return (
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
    );
};