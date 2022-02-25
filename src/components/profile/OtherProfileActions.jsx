import React, { useState } from 'react'
import { useNotification } from '../common/NotificationSheet'
import { deleteUnfollowUser, postFollowUser } from '../../network/backend'
import { useAuth } from '../auth/AuthWrapper'

export const OtherProfileActions = ({
  userId,
  isFollowing,
  onFollowingChange,
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const { showNotification } = useNotification()
  const { user } = useAuth()

  const btnClass = isFollowing ? 'btn-default' : 'btn-primary'
  const text = isFollowing ? 'Unfollow' : 'Follow'

  const toggleFollowing = () => {
    const action = isFollowing ? deleteUnfollowUser : postFollowUser
    setIsLoading(true)
    action(userId).then(
      (response) => {
        setIsLoading(false)
        onFollowingChange(userId, !isFollowing)
      },
      (error) => {
        showNotification('Network error. Please, try again.')
        setIsLoading(false)
      }
    )
  }

  return user.id !== userId ? (
    <button
      className={`btn ${btnClass}`}
      onClick={toggleFollowing}
      disabled={isLoading}
    >
      {text}
    </button>
  ) : null
}
