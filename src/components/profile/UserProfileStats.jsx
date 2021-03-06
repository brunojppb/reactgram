import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { SettingsMenuOverlay } from './SettingsMenuOverlay'
import Routes from '../../Routes'
import { getUserProfile } from '../../network/backend'
import { useNotification } from '../common/NotificationSheet'
import { UserProfileImage } from './UserProfileImage'
import { OtherProfileActions } from './OtherProfileActions'

const MyProfileActions = () => {
  const [showingSettings, setShowingSettings] = useState(false)
  const toggleSettings = () => {
    setShowingSettings(!showingSettings)
  }
  const settingsMenu = showingSettings ? (
    <SettingsMenuOverlay onClose={toggleSettings} />
  ) : null

  return (
    <React.Fragment>
      <Link to={Routes.SETTINGS} className="btn btn-default">
        Edit Profile
      </Link>
      <button className="link">
        <span className="icon-settings" onClick={toggleSettings}></span>
      </button>
      {settingsMenu}
    </React.Fragment>
  )
}

export const UserProfileStats = ({ userId, isMyProfile = false }) => {
  const { showNotification } = useNotification()
  const [profile, setProfile] = useState(null)

  const onToggleFollowing = (userId, isFollowing) => {
    setProfile((profile) => ({ ...profile, isFollowing: isFollowing }))
  }

  useEffect(() => {
    getUserProfile(userId).then(
      (response) => {
        const { user: userProfile } = response.data
        setProfile(userProfile)
      },
      (error) => {
        showNotification('Error while loading user.')
      }
    )
  }, [userId, showNotification])

  return profile ? (
    <div className="profile-stats-container">
      <UserProfileImage src={profile.pictureUrl} className="user-img-big" />
      <div className="profile-container">
        <div className="profile-settings">
          <span>{`${profile.firstName} ${profile.lastName}`}</span>
          {isMyProfile ? (
            <MyProfileActions />
          ) : (
            <OtherProfileActions
              userId={userId}
              onFollowingChange={onToggleFollowing}
              isFollowing={profile.isFollowing || false}
            />
          )}
        </div>
        <div className="profile-stats">
          <div>
            <strong>{profile.entryCount}</strong> post
            {profile.entryCount === 1 ? '' : 's'}
          </div>
          <div>
            <Link to={Routes.getUserFollowers(userId)}>
              <strong>{profile.followerCount}</strong> follower
              {profile.followerCount === 1 ? '' : 's'}
            </Link>
          </div>
          <div>
            <Link to={Routes.getUserFollowing(userId)}>
              <strong>{profile.followingCount}</strong> following
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : null
}
