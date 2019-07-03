import React from 'react';
import { CommentPicture, PostControls } from './Post';

export const PostPage = () => {

  return(
    <div className="post-page-container">
      <img src="https://picsum.photos/800/800" alt="post pic" />
      <div className="post-details-container">
        <div className="post-header">
          <img src="https://picsum.photos/50" className="user-img-small" alt="profile"/>
          <a href="/" className="username" >Bruno Pauluno</a>
          <a href="/" className="post-settings"><span className="icon-params"></span></a>
        </div>
        <div className="comments-container">
          <div className="list">
            { 
              [...Array(10).keys()].map(i => {
                return <CommentPicture key={i} username="Jonny Due" content="It's a flying pizza aboard the space station and it is loaded with toppings! From left, inside the Zvezda service module are, Flight Engineers Anne McClain, Alexey Ovchinin and Nick Hague; Commander Oleg Kononenko and Flight Engineer David Saint-Jacques."/>
              })
            } 
          </div>
          <div className="add-comment">
            <PostControls/>
            <input type="text" className="form-control" placeholder="adicione um comentário" />
          </div>
        </div>
      </div>
    </div>
  );

};