import React, { useState } from 'react';
import { UserProfileImage } from '../profile/UserProfileImage';
import { Link } from 'react-router-dom';
import Routes from '../../Routes';
import { postLike, deleteLike } from '../../network/backend';
import { PostSettingsOverlay } from './PostSettingsOverlay';

export const Post = ({id, pictureUrl, text, likes, user, isOwnPost, didLike, onDelete, onLikeChange}) => {

  const [isShowingSettings, setIsShowingSettings] = useState(false);

  const onSettingsClick = () => {
    setIsShowingSettings((isShowingSettings) => !isShowingSettings);
  };

  const onDeletePost = () => {
    onDelete(id);
  }

  
  const maybeSettings = isShowingSettings 
    ? <PostSettingsOverlay postId={id} userId={user.id} onClose={onSettingsClick} onDelete={onDeletePost}/>
    : null;

  return(
      <div className="post">
          <div className="post-header">
            <UserProfileImage src={user.pictureUrl} className="user-img-small"/>
            <Link to={Routes.getUserProfile(user.id)} className="username">
              {`${user.firstName} ${user.lastName}`}
            </Link>
            <button className="post-settings" onClick={onSettingsClick} aria-label="post settings">
              <span className="icon-params"/>
            </button>
          </div>
          <div className="post-content">
              <Link to={Routes.getPost(id)}>
                <img src={pictureUrl} alt="post" loading="lazy"/>
              </Link>
          </div>
          <PostControls postId={id} didLike={didLike} onLikeChange={onLikeChange}/>
          <PostReactions comment={text} likes={likes} user={user}/>
          {maybeSettings}
      </div>
  );

};

export const PostControls = ({postId, didLike, onLikeChange}) => {

  const [isLoading, setIsLoading] = useState(false);
  const onLikeClick = () => {
    const action = didLike ? deleteLike : postLike;
    setIsLoading(true);
    action(postId).then(response => {
      setIsLoading(false);
      onLikeChange(postId, !didLike);
    }, error => {
      setIsLoading(false);
    });
  }
  const color = isLoading 
    ? 'gray' 
    : didLike 
      ? 'red' 
      : '#222';

  return(
      <div className="post-controls">
        <button className="link" onClick={onLikeClick} disabled={isLoading}>
          <span className="icon-heart" style={{color}}/>
        </button>
        <Link to={Routes.getPost(postId)} className="link">
          <span className="icon-bubble"/>
        </Link>
      </div>
  );
}

export const PostReactions = ({comment, user, likes}) => {
  
  const likeText = likes !== 1 ? 'like' : 'likes';

  return(
    <div className="post-reactions">
      <span className="likes">{likes} {likeText}</span>
      <div className="comments-container">
        <Comment userId={user.id} username={`${user.firstName} ${user.lastName}`} content={comment} />
      </div>
    </div>
  );
};

export const Comment = ({userId, username, content}) => {
    return(
        <div className="comment">
          <Link to={Routes.getUserProfile(userId)} className="username">{username}</Link>
            <span>{content}</span>
        </div>
    );
};

export const CommentWithPicture = ({text, user: {id, firstName, lastName, pictureUrl}}) => {
    return(
        <div className="comment-picture-container">
          <UserProfileImage src={pictureUrl} className="user-img-small"/>
          <Comment userId={id} username={`${firstName} ${lastName}`} content={text}/>
        </div>
    );
}