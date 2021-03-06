import React, { useState, useEffect } from 'react'
import { getEntries } from '../../network/backend'
import Routes from '../../Routes'
import { Link } from 'react-router-dom'
import { useNotification } from '../common/NotificationSheet'

export const UserPosts = ({ userId }) => {
  // TODO: Refactor in a reducer
  const [{ entries, page, isLoading }, setState] = useState({
    entries: [],
    page: 1,
    isLoading: true,
  })
  const { showNotification } = useNotification()
  const loadMore = () => {
    setState((state) => ({ ...state, page: state.page + 1 }))
  }

  useEffect(() => {
    setState((state) => ({ ...state, isLoading: true }))
    getEntries(userId, page)
      .then((response) => {
        const { entries: newEntries } = response.data
        setState((state) => ({
          ...state,
          isLoading: false,
          entries: [...state.entries, ...newEntries],
        }))
      })
      .catch((error) => {
        showNotification('Error while loading comments.')
        setState((state) => ({ ...state, isLoading: false }))
      })
  }, [userId, page, showNotification])

  return (
    <React.Fragment>
      <div className="user-posts-container">
        {entries.map((entry) => (
          <Link
            to={Routes.getPost(entry.id)}
            key={entry.id}
            className="post-thumb"
          >
            <img src={entry.pictureUrl} alt="post" />
            <div className="post-stats-overlay">
              <div className="likes">
                <span className="icon-heart"></span> {entry.likes}
              </div>
              <div className="comments">
                <span className="icon-bubble"></span> {entry.comments}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="load-more-container">
        <button
          onClick={loadMore}
          className="btn btn-primary"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Load more'}
        </button>
      </div>
    </React.Fragment>
  )
}
