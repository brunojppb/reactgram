import React, { useContext } from 'react';
import {MenuOverlay} from '../common/MenuOverlay';
import {Link} from 'react-router-dom';
import Routes from '../../Routes';
import { AuthContext } from '../auth/AuthWrapper';

export const SettingsMenuOverlay = ({onClose}) => {

  const {onLogout} = useContext(AuthContext);

  return(
    <MenuOverlay onClose={onClose}>
      <ul className="settings-menu-overlay">
        <li><Link to={Routes.SETTINGS}>Editar Perfil</Link></li> 
        <li><Link to={Routes.CHANGE_PASSWORD}>Mudar Senha</Link></li> 
        <li><a href="#" className="link" onClick={() => onLogout()}>Sair</a></li> 
      </ul>
    </MenuOverlay>
  );

};