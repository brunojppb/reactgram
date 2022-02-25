import React from 'react'
import { UserProfileImage } from '../profile/UserProfileImage'
import { OtherProfileActions } from '../profile/OtherProfileActions'
import { Link } from 'react-router-dom'
import Routes from '../../Routes'

export const FollowerItem = ({
  id,
  firstName,
  lastName,
  pictureUrl,
  isFollowing,
  onFollowingChange,
}) => {
  return (
    <div className="follower-item">
      <UserProfileImage src={pictureUrl} className="user-img-small" />
      <span className="username">
        <Link to={Routes.getUserProfile(id)}>
          {firstName} {lastName}
        </Link>
      </span>
      <OtherProfileActions
        userId={id}
        isFollowing={isFollowing}
        onFollowingChange={onFollowingChange}
      />
    </div>
  )
}
