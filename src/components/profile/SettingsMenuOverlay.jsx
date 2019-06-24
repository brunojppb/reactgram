import React from 'react';
import {MenuOverlay} from '../common/MenuOverlay';
import {Link} from 'react-router-dom';

export const SettingsMenuOverlay = ({onClose}) => {

    return(
        <MenuOverlay onClose={onClose}>
            <ul className="settings-menu-overlay">
               <li><Link to="/app/profile/settings">Editar Perfil</Link></li> 
               <li><Link to="/app/profile/settings/pw">Mudar Senha</Link></li> 
               <li><Link to="/app/timeline">Sair</Link></li> 
            </ul>
        </MenuOverlay>
    );

};