import React from 'react';

export const NotificationsOverlay = () => {

    return(
        <>
            <div className="notifications-arrow"/>
            <div className="notifications-arrow-cover"/>
            <div className="notifications-overlay">
                { [1,2,3,4,5].map(i => <NotificationItem key={i}/>) }
            </div>
        </>
    );

};

export const NotificationItem = () => {
    return (
        <div class="notification-item">
            <img src="https://picsum.photos/30/30" className="user-sm round" alt="user"/>
            <div class="description">
                <span className="username">Mario Santos</span> curtiu sua foto. <span className="time">4h</span>
            </div>
            <img src="https://picsum.photos/30/30" className="post-thumb-small" alt="post"/>
        </div>
    );
};