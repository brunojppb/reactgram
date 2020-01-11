import React from 'react';
import { UserProfileImage } from '../profile/UserProfileImage';
import { Link } from 'react-router-dom';
import Routes from '../../Routes';

export const Post = ({id, pictureUrl, text, likes, comments, user}) => {
    return(
        <div className="post">
            <div className="post-header">
              <UserProfileImage src={user.pictureUrl} className="user-img-small"/>
              <Link to={Routes.getUserProfile(user.id)} className="username">
                {`${user.firstName} ${user.lastName}`}
              </Link>
              <a href="/app" className="post-settings"><span className="icon-params"></span></a>
            </div>
            <div className="post-content">
                <img src={pictureUrl} alt="post"/>
            </div>
            <PostControls/>
            <PostReactions comment={text} likes={likes} user={user}/>
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