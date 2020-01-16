import React, { useContext } from 'react';
import { MenuOverlay } from '../common/MenuOverlay';
import { Link } from 'react-router-dom';
import Routes from '../../Routes';
import { AuthContext } from '../auth/AuthWrapper';

export const PostSettingsOverlay = ({postId, userId, onClose, onDelete}) => {

  const {user} = useContext(AuthContext)
  const isOwnPost = userId === user.id;

  return(
    <MenuOverlay onClose={onClose} >
    <ul className="settings-menu-overlay">
      <li>
        <Link to={Routes.getUserProfile(userId)}>Ver Perfil do Usuário</Link>
      </li>
      <li>
        { isOwnPost 
          ? <button href="#" className="link" onClick={onDelete}>Deletar</button>
          : null
        }
      </li>
    </ul>
  </MenuOverlay>
  )
};