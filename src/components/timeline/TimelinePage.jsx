import React, { useReducer, useEffect, useContext } from 'react';
import {Post} from '../post/Post';
import {ProfileSummary} from './ProfileSummary';
import { getFeed, deletePost } from '../../network/backend';
import {GlobalNotificationContext} from '../common/NotificationSheet';
import { AuthContext } from '../auth/AuthWrapper';

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
    case 'DELETE_POST':
      return {
        ...state,
        feed: [
          ...state.feed.filter(p => p.id !== action.postId),
        ]
      };
    case 'LOAD_MORE':
      return {
        ...state,
        page: state.page + 1,
      };
    case 'DID_LIKE_POST':
      return {
        ...state,
        feed: state.feed.map(p => {
          return p.id === action.postId ? {...p, likes: p.likes+1, didLike: true} : p;
        })
      };
    case 'DID_DISLIKE_POST':
      return {
        ...state,
        feed: state.feed.map(p => {
          return p.id === action.postId ? {...p, likes: p.likes-1, didLike: false} : p;
        })
      };
    
    default: return state;
  }
}

export const TimelinePage = () => {

  const {user} = useContext(AuthContext);
  const {showNotification} = useContext(GlobalNotificationContext);
  const [{feed, page, isLoading}, dispatch] = useReducer(reducer, {feed: [], page: 1, isLoading: true});
  useEffect(() => {
    dispatch({type: 'FETCH_FEED'});
    getFeed(page).then(response => {
      const {feed} = response.data;
      dispatch({type: 'FETCH_FEED_SUCCESS', feed});
    }, error => {
      dispatch({type: 'FETCH_FEED_ERROR'});
      showNotification('Erro ao carregar feed. Tente novamente.');
    })
  }, [page, showNotification]);

  const loadMore = () => {
    dispatch({type: 'LOAD_MORE'});
  };

  const onDeletePost = (postId) => {
    deletePost(postId).then(response => {
      dispatch({type: 'DELETE_POST', postId});
    });
  };
  
  const onLikeChange = (postId, didLike) => {
    const dispatchType = didLike ? 'DID_LIKE_POST' : 'DID_DISLIKE_POST';
    console.log('dispatch: ', dispatchType);
    dispatch({type: dispatchType, postId: parseInt(postId)});
  }

  return(
    <div className="timeline">
      <div className="posts">
        {feed.map(post => {
          return (
            <Post key={post.id}
                  isOwnPost={post.user.id === user.id} 
                  onDelete={onDeletePost}
                  onLikeChange={onLikeChange}
                  {...post} />
          )
        })}
        <div className="load-more-container">
          <button onClick={loadMore} className="btn btn-primary" disabled={isLoading}>{isLoading ? 'carregando...' : 'carregar mais'}</button>
        </div>
      </div>
      <ProfileSummary/>
    </div>
  );

};