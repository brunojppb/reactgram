import React from 'react'
import { MenuOverlay } from '../common/MenuOverlay'
import { Link } from 'react-router-dom'
import Routes from '../../Routes'
import { useAuth } from '../auth/AuthWrapper'

export const PostSettingsOverlay = ({ postId, userId, onClose, onDelete }) => {
  const { user } = useAuth()
  const isOwnPost = userId === user.id

  return (
    <MenuOverlay onClose={onClose}>
      <ul className="settings-menu-overlay">
        <li>
          <Link to={Routes.getUserProfile(userId)}>Go to user profile</Link>
        </li>
        <li>
          {isOwnPost ? (
            <button href="#" className="link" onClick={onDelete}>
              Delete
            </button>
          ) : null}
        </li>
      </ul>
    </MenuOverlay>
  )
}
