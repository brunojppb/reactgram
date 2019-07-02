import React from 'react';
import {withRouter} from 'react-router';
import {MenuOverlay} from '../common/MenuOverlay';
import Routes from '../../Routes';

let UserListPage = ({history, location, title, users}) => {
  const onClose = () => history.push(Routes.PROFILE);
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

UserListPage = withRouter(UserListPage);

// TODO: Call followers endpoint
export const FollowersPage = ({history}) => {
  const users = [...Array(30).keys()];
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