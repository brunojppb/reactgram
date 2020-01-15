import React, { useState, useEffect } from 'react';
import { CommentPicture, PostControls } from './Post';
import { useParams } from 'react-router';
import { getPost } from '../../network/backend';
import { UserProfileImage } from '../profile/UserProfileImage';
import { Link } from 'react-router-dom';
import Routes from '../../Routes';

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
      <img src={pictureUrl} alt={text} />
      <div className="post-details-container">
        <div className="post-header">
          <UserProfileImage src={userPic} className="user-img-small"/>
          <Link to={Routes.getUserProfile(userId)}>{firstName} {lastName}</Link>
          <a href="/" className="post-settings"><span className="icon-params"></span></a>
        </div>
        <PostComments postId={id} didLike={didLike} onLikeChange={onLikeChange}/>
      </div>
    </div>
  );
};

const PostComments = ({postId, didLike, onLikeChange}) => {
  return(
    <React.Fragment>
      <div className="comments-container">
      <div className="list">
        { 
          [...Array(30).keys()].map(i => {
            return <CommentPicture key={i} username="Jonny Due" content="It's a flying pizza aboard the space station and it is loaded with toppings! From left, inside the Zvezda service module are, Flight Engineers Anne McClain, Alexey Ovchinin and Nick Hague; Commander Oleg Kononenko and Flight Engineer David Saint-Jacques."/>
          })
        } 
      </div>
    </div>
    <div className="add-comment">
      <PostControls postId={postId} didLike={didLike} onLikeChange={onLikeChange}/>
      <input type="text" className="form-control" placeholder="adicione um comentário" />
    </div>
    </React.Fragment>
  )
};