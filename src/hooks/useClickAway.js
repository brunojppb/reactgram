import {useEffect, useRef} from 'react';

export const useClickAway = (ref, onClickAway) => {
    
    // Keep a mutable reference to click away callback
    // and change it everything the component using it changes
    // using 'useRef' here will make sure that we have a mutable 
    // and single callback lying around.
    const callbackRef = useRef(onClickAway);
    useEffect(() => {
        callbackRef.current = onClickAway;
    }, [onClickAway]);

    // listen for click events on ref element
    // attaching a handler and calling the callback if necessary
    useEffect(() => {
        console.log('click effect kicked in');
        const onClick = (event) => {
            const {current} = ref;
            if (current && !current.contains(event.target)) {
                callbackRef.current(event);
            }
        };
        document.addEventListener('mousedown', onClick);
        document.addEventListener('touchstart', onClick);
        return () => {
            console.log("removing listeners...");
            document.removeEventListener('mousedown', onClick);
            document.removeEventListener('touchstart', onClick);
        }
    }, [ref]);
};