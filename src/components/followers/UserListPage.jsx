import React from 'react';
import {useParams, useHistory} from 'react-router';
import {MenuOverlay} from '../common/MenuOverlay';
import Routes from '../../Routes';

export const UserListPage = ({title, users}) => {
  const history = useHistory();
  const {id} = useParams();
  const onClose = () => history.replace(Routes.getUserProfile(id));
  return(
    <MenuOverlay onClose={onClose}>
      <div className="followers-container">
        <div className="header">
          <h4>{title}</h4>
          <button className="link close-btn close" onClick={onClose}/>
        </div>
        <div className="content">
          <div className="list">
            { users.map(i => <FollowerItem key={i} />) }
          </div>
        </div>
      </div>
    </MenuOverlay>
  );
};

const FollowerItem = () => {
  return(
    <div className="follower-item">
      <img src="https://picsum.photos/50" className="user-img-small" alt="follower"/>
      <span className="username">João Duende</span>
      <button className="btn btn-primary">Seguir</button>
    </div>
  );
};

// TODO: Call followers endpoint
export const FollowersPage = ({history}) => {
  const users = [...Array(5).keys()];
  return(
    <UserListPage title="Seguidores" users={users}/>
  );
};

// TODO: Call followers endpoint
export const FollowingPage = ({history}) => {
  const users = [...Array(30).keys()];
  return(
    <UserListPage title="Seguindo" users={users}/>
  );
};