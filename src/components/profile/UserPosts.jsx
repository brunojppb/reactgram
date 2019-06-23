import React from 'react';

export const UserPosts = () => {

    const size = () => {
        const width = Math.floor(Math.random() * (600 - 300) + 800);
        const height = Math.floor(Math.random() * (400 - 100) + 500);
        return [width, height];
    }

    const pics = [1,2,3,4,5,6,7,8,9,11,12,13,14,15,16].map(i => {
        const [w, h] = size();
        return(
            <div className="post-thumb" key={i}>
                <img src={`https://picsum.photos/${w}/${h}`} alt="post"/>
                <div className="post-stats-overlay">
                    <div className="likes">
                        <span className="icon-heart"></span> 105
                    </div>
                    <div className="comments">
                        <span className="icon-bubble"></span> 30
                    </div>
                </div>
            </div>
        );
    })

    return(
        <div className="user-posts-container">
            {pics}
        </div>
    );

};