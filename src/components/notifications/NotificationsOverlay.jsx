import React, {useRef} from 'react';
import {useClickAway} from '../../hooks/useClickAway';

export const NotificationsOverlay = ({onClose}) => {

    const ref = useRef(null);
    useClickAway(ref, (event) => {
        onClose && onClose(event);
    });

    return(
        <>
            <div className="notifications-arrow"/>
            <div className="notifications-arrow-cover"/>
            <div className="notifications-overlay" ref={ref}>
                { [...Array(30).keys()].map(i => <NotificationItem key={i}/>) }
            </div>
        </>
    );

};

export const NotificationItem = () => {
    return (
        <div className="notification-item">
            <img src="https://picsum.photos/30/30" className="user-sm round" alt="user"/>
            <div className="description">
                <span className="username">Mario Santos</span>
                <span className="content">curtiu sua foto.</span>
                <span className="time">4h</span>
            </div>
            <img src="https://picsum.photos/30/30" className="post-thumb-small" alt="post"/>
        </div>
    );
};