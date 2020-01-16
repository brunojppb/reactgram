import React, { useState, useEffect, useContext, useRef } from 'react';
import { CommentWithPicture, PostControls } from './Post';
import { useParams } from 'react-router';
import { getPost, getPostComments, postComment } from '../../network/backend';
import { UserProfileImage } from '../profile/UserProfileImage';
import { Link } from 'react-router-dom';
import Routes from '../../Routes';
import { GlobalNotificationContext } from '../common/NotificationSheet';

export const PostPage = () => {

  const [post, set] = useState(null);
  const {postId} = useParams();

  useEffect(() => {
    getPost(postId).then(response => {
      const {entry: post} = response.data;
      set(post);
    });
  }, [postId]);

  const onLikeChange = (postId, didLike) => {
    set(post => ({...post, didLike}));
  }

  return post
  ? <Post {...post} onLikeChange={onLikeChange}/>
  : <h1>Carregando...</h1>;

};

const Post = ({id, pictureUrl, text, didLike, user, onLikeChange}) => {
  const {id: userId, pictureUrl: userPic, firstName, lastName} = user;
  return(
    <div className="post-page-container">
      <div className="post-header">
        <UserProfileImage src={userPic} className="user-img-small"/>
        <Link to={Routes.getUserProfile(userId)}>{firstName} {lastName}</Link>
        <a href="/" className="post-settings"><span className="icon-params"></span></a>
      </div>
      <img src={pictureUrl} alt={text} />
      <PostComments postId={id} didLike={didLike} onLikeChange={onLikeChange} text={text} user={user}/>
    </div>
  );
};

const PostComments = ({postId, didLike, onLikeChange, text, user}) => {

  const [comments, setComments] = useState([]);
  const [isPosting, setIsPosting] = useState(false);
  const {showNotification} = useContext(GlobalNotificationContext);
  const inputRef = useRef(null);
  
  useEffect(() => {
    getPostComments(postId).then(response => {
      const {comments} = response.data;
      setComments(prevComments => [...prevComments, ...comments]);
    }).catch(() => {
      showNotification('Erro ao carregar comentários');
    });
  }, [postId, showNotification]);

  const createComment = (comment) => {
    setIsPosting(true);
    postComment(postId, comment).then(response => {
      const {comment} = response.data;
      setComments(comments => [...comments, comment]);
      inputRef.current.value = '';
    }).catch(error => {
      showNotification('Não foi possível postar comentário.');
    }).then(() => {
      setIsPosting(false);
    });
  }

  const onKeyPress = (event) => {
    const {key} = event;
    if (key === 'Enter') {
      const value = event.target.value || '';
      if (value === '') {
        showNotification('Comentário não pode ser vazio.');
      } else {
        createComment(value);
      }
    }
  }

  return(
    <React.Fragment>
      <div className="comments-container">
      <div className="list">
      <CommentWithPicture text={text} user={user}/>
      { comments.map(c => <CommentWithPicture key={c.id} {...c}/>) } 
      </div>
    </div>
    <div className="add-comment">
      <PostControls postId={postId} didLike={didLike} onLikeChange={onLikeChange}/>
      <input type="text" 
              className="form-control" 
              placeholder="adicione um comentário" 
              name="comment" 
              ref={inputRef} 
              onKeyPress={onKeyPress} disabled={isPosting}/>
    </div>
    </React.Fragment>
  )
};