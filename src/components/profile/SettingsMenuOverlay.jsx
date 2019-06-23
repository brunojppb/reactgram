import React from 'react';
import {MenuOverlay} from '../common/MenuOverlay';

export const SettingsMenuOverlay = () => {

    return(
        <MenuOverlay onClose={() => console.log('on close')}>
            <ul className="settings-menu-overlay">
               <li>Editar Perfil</li> 
               <li>Mudar Senha</li>
               <li>Sair</li>
            </ul>
        </MenuOverlay>
    );

};