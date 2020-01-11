import React, { useState } from 'react';
import { UserProfileImage } from '../profile/UserProfileImage';
import { Link } from 'react-router-dom';
import Routes from '../../Routes';
import { MenuOverlay } from '../common/MenuOverlay';

export const Post = ({id, pictureUrl, text, likes, user, isOwnPost, onDelete}) => {

  const [isShowingSettings, set] = useState(false);

  const onSettingsClick = () => {
    set((isShowingSettings) => !isShowingSettings);
  };

  const onDeletePost = () => {
    onDelete(id);
  }

  const maybeSettings = isShowingSettings 
    ? (
      <MenuOverlay onClose={onSettingsClick} >
        <ul className="settings-menu-overlay">
          <li>
            <Link to={Routes.getUserProfile(user.id)}>Ver Perfil do Usuário</Link>
          </li>
          <li>
            { isOwnPost 
              ? <button href="#" className="link" onClick={onDeletePost}>Deletar</button>
              : null
            }
          </li>
        </ul>
      </MenuOverlay>
    )
    : null;

  return(
      <div className="post">
          <div className="post-header">
            <UserProfileImage src={user.pictureUrl} className="user-img-small"/>
            <Link to={Routes.getUserProfile(user.id)} className="username">
              {`${user.firstName} ${user.lastName}`}
            </Link>
            <button className="post-settings" onClick={onSettingsClick}>
              <span className="icon-params"></span>
            </button>
          </div>
          <div className="post-content">
              <img src={pictureUrl} alt="post"/>
          </div>
          <PostControls/>
          <PostReactions comment={text} likes={likes} user={user}/>
          {maybeSettings}
      </div>
  );

};

export const PostControls = () => {
    return(
        <div className="post-controls">
          <button className="link"><span className="icon-heart"/></button>
          <button className="link"><span className="icon-bubble"/></button>
        </div>
    );
}

export const PostReactions = ({comment, user, likes}) => {
    return(
        <div className="post-reactions">
            <span className="likes">{likes} curtidas</span>
            <div className="comments-container">
              <Comment username={`${user.firstName} ${user.lastName}`} content={comment} />
            </div>
        </div>
    );
};

export const Comment = ({username, content}) => {
    return(
        <div className="comment">
            <span className="username">{username}</span>
            <span>{content}</span>
        </div>
    );
};

export const CommentPicture = ({username, content}) => {
    return(
        <div className="comment-picture-container">
            <img src="https://picsum.photos/50" className="user-img-small" alt="profile"/>
            <Comment username={username} content={content} />
        </div>
    );
}