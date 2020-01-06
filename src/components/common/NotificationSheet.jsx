import React, { useState, createContext } from 'react'
import {animated, useTransition} from 'react-spring'

export const GlobalNotificationContext = createContext(null);

const DURATION = 4000
let id = 0;

export const NotificationWrapper = ({children}) => {
  const config = {tension: 125, friction: 20, precision: 0.1,};
  const [messageQueue, setMessageQueue] = useState([])
  const transitions = useTransition(messageQueue, item => item.id, {
    from: { opacity: 0, progress: '100%', transform: 'translateX(100%)' },
    enter: item => async next => {
      await next({opacity: 1, transform: 'translateX(0)'})
    },
    leave: item => async (next, cancel) => {
      await next({progress: '0%'})
      await next({opacity: 0})
      await next({transform: 'translateX(100%)'})
    },
    onRest: item => setMessageQueue(queue => queue.filter(i => i.id !== item.id)),
    config: (item, animationState) => {
      switch (animationState) {
        case 'leave':
          // Duration only for opacity animation
          return [{duration: DURATION}, config, config]
        default:
          // default configuration on enter
          return config
      }
    }
  })

  const showNotification = (msg) => {
    setMessageQueue(queue => [...queue, {id: id++, text: msg}])
  }

  return(
    <GlobalNotificationContext.Provider value={{showNotification}}>
      {children}
      <div className="notification-sheet">
        {transitions.map(({key, item, props: {progress, ...style}}) => {
          return (
            <NotificationItem key={key} message={item.text} springStyle={style} progress={progress}/>
          )
        })}
      </div>
    </GlobalNotificationContext.Provider>
  )

}

const NotificationItem = ({progress, springStyle, message}) => {
  return(
    <animated.div style={springStyle} className="notification-sheet-item">
      <div className="message">
        {message}
      </div>
      <animated.div style={{right: progress}} className="progress"/>
    </animated.div>
  )
}