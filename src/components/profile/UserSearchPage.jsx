import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { getSearch } from '../../network/backend';
import { FollowerItem } from '../followers/FollowerItem';

export const UserSearchPage = () => {

  const [{users, isLoading}, set] = useState({users: [], isLoading: false});
  const [, onSubmit, onChange] = useForm((values) => {
    const {search} = values;
    set((state) => ({...state, isLoading: true}));
    getSearch(search).then(response => {
      const {users} = response.data;
      set((state) => ({...state, users, isLoading: false}));
    }).catch(error => {
      console.log('could not search for users', error.response);
      set(state => ({...state, isLoading: false}));
    });
  }, {search: ''});

  const onFollowingChange = (userId, isFollowing) => {
    set(state => {
      return {
        ...state,
        users: state.users.map(u => {
          return u.id === userId ? {...u, isFollowing} : u;
        })
      };
    });
  };



  return(
    <div className="user-search-container">
      <h1>Buscar</h1>
      <div className="search-container">
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Busque seus amigos aqui..." name="search" onChange={onChange}/>
          <input type="submit" value="buscar" className="btn btn-primary" disabled={isLoading} style={{marginLeft: 8}}/>
        </form>
      </div>
      <div className="search-result-container">
        {users.map(
          u => <FollowerItem key={u.id} onFollowingChange={onFollowingChange} {...u}/>
          )}
      </div>
    </div>
  );

};