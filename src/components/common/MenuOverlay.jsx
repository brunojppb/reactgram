import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

export const MenuOverlay = ({onClose, ...props}) => {

    const ref = useRef(null);
    const handleListenner = (event) => {
        console.log('ref: ', ref);
        if(ref && ref.current && !ref.current.contains(event.target)) {
            console.log('click outside. close...');
            onClose();
        } else {
            console.log('click on menu');
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