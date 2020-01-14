import React, { useState, useEffect, useCallback } from 'react';
import {useParams, useHistory} from 'react-router';
import {MenuOverlay} from '../common/MenuOverlay';
import Routes from '../../Routes';
import { getFollowers, getFollowing } from '../../network/backend';
import { FollowerItem } from './FollowerItem';

export const UserListPage = ({title, fetchAction}) => {
  const history = useHistory();
  const {userId} = useParams();
  const onClose = () => history.replace(Routes.getUserProfile(userId));
  const [{users, isLoading}, setState] = useState({users: [], isLoading: false});

  const onFollowingChange = (userId, isFollowing) => {
    setState(state => {
      return {
        ...state,
        users: state.users.map(u => {
          return u.id === userId ? {...u, isFollowing} : u;
        })
      };
    })
  }

  useEffect(() => {
    setState(state => ({...state, isLoading: true}));
    fetchAction(userId).then(response => {
      const {users} = response.data;
      setState(state => ({...state, users, isLoading: false}));
    }, error => {
      setState(state => ({...state, isLoading: false}));
      console.error('could not load.');
    });
  }, [userId, fetchAction]);

  const _renderStatus = () => {
    const style = {textAlign: 'center', padding: 32};
    if (isLoading) {
      return <div style={style}>carregando...</div>;
    }
    if (!isLoading && users.length === 0) {
      return <div style={style}>Nenhum usuário encontrado :/</div>;
    }
    return null;
  };

  return(
    <MenuOverlay onClose={onClose}>
      <div className="followers-container">
        <div className="header">
          <h4>{title}</h4>
          <button className="link close-btn close" onClick={onClose}/>
        </div>
        <div className="content">
          <div className="list">
            { users.map(u => (
              <FollowerItem key={u.id} 
                            onFollowingChange={onFollowingChange} 
                            {...u} />)
            ) }
            { _renderStatus() }
          </div>
        </div>
      </div>
    </MenuOverlay>
  );
};

export const FollowersPage = () => {
  const fetchFollowers = useCallback(getFollowers, []);
  return(
    <UserListPage title="Seguidores" fetchAction={fetchFollowers}/>
  );
};

export const FollowingPage = () => {
  const fetchFollowing = useCallback(getFollowing, []);
  return(
    <UserListPage title="Seguindo" fetchAction={fetchFollowing}/>
  );
};