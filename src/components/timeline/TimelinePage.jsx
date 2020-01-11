import React, { useReducer, useEffect, useContext } from 'react';
import {Post} from '../post/Post';
import {ProfileSummary} from './ProfileSummary';
import { getFeed } from '../../network/backend';
import {GlobalNotificationContext} from '../common/NotificationSheet';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_FEED':
      return {
        ...state,
        isLoading: true,
      };
    case 'FETCH_FEED_SUCCESS':
      return {
        ...state,
        isLoading: false,
        feed: [
          ...state.feed,
          ...action.feed,
        ]
      };
    case 'FETCH_FEED_ERROR':
      return {
        ...state,
        isLoading: false,
      };
    case 'LOAD_MORE':
      return {
        ...state,
        page: state.page + 1,
      };
    
    default: return state;
  }
}

export const TimelinePage = () => {

  const {showMessage} = useContext(GlobalNotificationContext);
  const [{feed, page, isLoading}, dispatch] = useReducer(reducer, {feed: [], page: 1, isLoading: true});

  useEffect(() => {
    dispatch({type: 'FETCH_FEED'});
    getFeed(page).then(response => {
      const {feed} = response.data;
      dispatch({type: 'FETCH_FEED_SUCCESS', feed});
    }, error => {
      dispatch({type: 'FETCH_FEED_ERROR'});
      showMessage('Erro ao carregar feed. Tente novamente.');
    })
  }, [page]);

  const loadMore = () => {
    dispatch({type: 'LOAD_MORE'});
  };

  return(
    <div className="timeline">
      <div className="posts">
        {feed.map(post => <Post key={post.id} {...post}/>)}
        <div className="load-more-container">
          <button onClick={loadMore} className="btn btn-primary" disabled={isLoading}>{isLoading ? 'carregando...' : 'carregar mais'}</button>
        </div>
      </div>
      <ProfileSummary/>
    </div>
  );

};