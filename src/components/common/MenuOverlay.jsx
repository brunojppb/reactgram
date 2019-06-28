import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

/** Reusable full-screen overlay 
 * Dismissible on click outside of children */
export const MenuOverlay = ({onClose, ...props}) => {

    const ref = useRef(null);
    const handleListenner = (event) => {
        if (ref && ref.current && ref.current === event.target) {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleListenner);
        return(() => {
            document.removeEventListener('mouseDown', handleListenner);
        })
    });

    return(
        <div className="menu-overlay" ref={ref}>
            {props.children}
        </div>
    );

}

MenuOverlay.propTypes = {
    onClose: PropTypes.func.isRequired,
};