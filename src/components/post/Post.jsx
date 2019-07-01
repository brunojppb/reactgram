import React from 'react';

export const Post = () => {
    const width = Math.floor(Math.random() * (1280 - 800) + 800);
    const height = Math.floor(Math.random() * (720 - 500) + 500);
    return(
        <div className="post">
            <div className="post-header">
                <img src="https://picsum.photos/50" className="user-img-small" alt="profile"/>
                <a href="/" className="username" >Bruno Pauluno</a>
                <a href="/" className="post-settings"><span className="icon-params"></span></a>
            </div>
            <div className="post-content">
                <img src={`https://picsum.photos/${width}/${height}`} alt="post"/>
            </div>
            <PostControls/>
            <PostReactions/>
        </div>
    );

};

export const PostControls = () => {
    return(
        <div className="post-controls">
            <div className="controls">
                <a href="/"><span className="icon-heart"/></a>
                <a href="/"><span className="icon-bubble"/></a>
                <a href="/"><span className="icon-paperplane"/></a>
            </div>
        </div>
    );
}

export const PostReactions = () => {
    return(
        <div className="post-reactions">
            <span className="likes">15,775 likes</span>
            <div className="comments-container">
                <Comment username="Bruno Paulino" content="It's a flying pizza aboard the space station and it is loaded with toppings! From left, inside the Zvezda service module are, Flight Engineers Anne McClain, Alexey Ovchinin and Nick Hague; Commander Oleg Kononenko and Flight Engineer David Saint-Jacques." />
                <Comment username="Bruno Paulino" content="Muito legal isso ai viu" />
                <Comment username="Bruno Paulino" content="WHAT?? 🤩😳🤯" />
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
            <img src="https://picsum.photos/50" class="user-img-small" alt="profile"/>
            <Comment username={username} content={content} />
        </div>
    );
}