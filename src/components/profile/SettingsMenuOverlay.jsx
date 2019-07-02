import React from 'react';
import {MenuOverlay} from '../common/MenuOverlay';
import {Link} from 'react-router-dom';
import Routes from '../../Routes';

export const SettingsMenuOverlay = ({onClose}) => {

    return(
        <MenuOverlay onClose={onClose}>
            <ul className="settings-menu-overlay">
               <li><Link to={Routes.SETTINGS}>Editar Perfil</Link></li> 
               <li><Link to={Routes.CHANGE_PASSWORD}>Mudar Senha</Link></li> 
               <li><Link to={Routes.TIMELINE}>Sair</Link></li> 
            </ul>
        </MenuOverlay>
    );

};