import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import Routes from '../../Routes'
import { useAuth } from '../auth/AuthWrapper'
import { UserProfileImage } from '../profile/UserProfileImage'

export const ProfileSummary = () => {
  const { user } = useAuth()
  const { entryCount, followerCount, followingCount } = user

  return (
    <div className="profile-suggestions-container">
      <Link to={Routes.getUserProfile(user.id)}>
        <UserProfileImage src={user.pictureUrl} className="user-img" />
      </Link>
      <div className="profile-details">
        <Link to={Routes.getUserProfile(user.id)}>
          <span className="username">{`${user.firstName} ${user.lastName}`}</span>
        </Link>
        <div className="profile-stats">
          <span>
            {entryCount} post{entryCount === 1 ? '' : 's'}
          </span>
          <span>
            {followerCount} follower{followerCount === 1 ? '' : 's'}
          </span>
          <span>{followingCount} following</span>
        </div>
      </div>
    </div>
  )
}
