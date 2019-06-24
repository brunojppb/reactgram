import React from 'react';
import {NavLink, Switch, Route} from 'react-router-dom';

const SettingsSidebar = () => {
  return(
    <ul>
      <li><NavLink exact to="/app/profile/settings" activeClassName="active">Editar Perfil</NavLink></li>
      <li><NavLink to="/app/profile/settings/pw" activeClassName="active">Mudar Senha</NavLink></li>
      <li><a href="#">Sair</a></li>
    </ul>
  );
}

const EditPasswordForm = () => {
  return(
    <div className="edit-profile-container">
      <div className="form-group">
        <label>Nova Senha</label>
        <input type="password" name="password" placeholder="Nova senha" className="form-control"/>
      </div>
      <div className="form-group">
        <label>Confirme Senha</label>
        <input type="password" name="passwordConfirmation" placeholder="Confirme a senha" className="form-control"/>
      </div>
      <div className="form-group">
        <div></div>
        <div>
          <button className="btn btn-primary">Salvar</button>
        </div>
      </div>
    </div>
  );
}

const EditProfileForm = () => {

  return(
    <div className="edit-profile-container">
      <div className="form-group">
        <img src="https://picsum.photos/150" className="user-img" alt="profile"/>
        <div className="edit-picture">
          <span>Bruno Paulino</span>
          <a href="#">Atualizar foto</a>
        </div>
      </div>
      <div className="form-group">
        <label>Nome</label>
        <input name="firstName" placeholder="Nome" className="form-control"/>
      </div>
      <div className="form-group">
        <label>Sobrenome</label>
        <input name="lastName" placeholder="Sobrenome" className="form-control"/>
      </div>
      <div className="form-group">
        <div></div>
        <div>
          <button className="btn btn-primary">Salvar</button>
        </div>
      </div>
    </div>
  );

};

export const ProfileSettingsPage = () => {

  return(
    <div className="profile-settings-container">
      <div className="settings-menu">
        <SettingsSidebar/>
      </div>
      <div className="settings-content">
        <Switch>
          <Route path="/app/profile/settings" exact component={EditProfileForm}/>
          <Route path="/app/profile/settings/pw" component={EditPasswordForm}/>
        </Switch>
      </div>
    </div>
  );

};