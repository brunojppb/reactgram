import React, { useState, useEffect } from 'react';
import { getEntries } from '../../network/backend';

export const UserPosts = ({ userId }) => {

  // TODO: Refactor in a reducer
  const [{entries, page, isLoading}, setState] = useState({entries: [], page: 1, isLoading: true});

  const loadMore = () => {
    setState(state => ({...state, page: state.page + 1}));
  }

  useEffect(() => {
    setState(state => ({...state, isLoading: true}));
    getEntries(userId, page).then(response => {
      const {entries: newEntries} = response.data;
      setState((state) => ({...state, isLoading: false, entries: [...state.entries, ...newEntries]}));
    });
  }, [userId, page]);

  return (
    <React.Fragment>
      <div className="user-posts-container">
      {entries.map(entry => (
        <div className="post-thumb" key={entry.id}>
          <img src={entry.pictureUrl} alt="post"/>
          <div className="post-stats-overlay">
            <div className="likes">
                <span className="icon-heart"></span> {entry.likes}
            </div>
            <div className="comments">
                <span className="icon-bubble"></span> {entry.comments}
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="load-more-container">
        <button onClick={loadMore} className="btn btn-primary" disabled={isLoading}>{isLoading ? 'carregando...' : 'carregar mais'}</button>
    </div>
    </React.Fragment>
    
  );

};