import React, { useState, useContext } from 'react';
import { GlobalNotificationContext } from '../common/NotificationSheet';
import { deleteUnfollowUser, postFollowUser } from '../../network/backend';
import { AuthContext } from '../auth/AuthWrapper';

export const OtherProfileActions = ({userId, isFollowing, onFollowingChange}) => {
  
  const [isLoading, setIsLoading] = useState(false);
  const {showNotification} = useContext(GlobalNotificationContext);
  const {user} = useContext(AuthContext);

  const btnClass = isFollowing ? 'btn-default' : 'btn-primary';
  const text = isFollowing ? 'deixar de seguir' : 'seguir';
  
  const toggleFollowing = () => {
    const action = isFollowing ? deleteUnfollowUser : postFollowUser;
    setIsLoading(true);
    action(userId).then(response => {
      setIsLoading(false);
      onFollowingChange(userId, !isFollowing);
    }, error => {
      showNotification('Erro na requisição. Tente novamente.');
      setIsLoading(false);
    });
  }

  return user.id !== userId 
    ? (
    <button className={`btn ${btnClass}`} 
            onClick={toggleFollowing} 
            disabled={isLoading}>
      {text}
    </button>
    )
    : null;
};