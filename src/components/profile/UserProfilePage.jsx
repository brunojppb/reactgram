import React from 'react'
import { Switch, Route, useParams } from 'react-router-dom'

import { UserProfileStats } from './UserProfileStats'
import { UserPosts } from './UserPosts'
import Routes from '../../Routes'
import { FollowersPage, FollowingPage } from '../followers/UserListPage'
import { useAuth } from '../auth/AuthWrapper'

export const UserProfilePage = () => {
  const { userId } = useParams()
  const { user } = useAuth()
  const userProfileId = parseInt(userId || user.id)
  const isMyProfile = userProfileId === user.id

  return (
    <div className="profile-page">
      <UserProfileStats userId={userProfileId} isMyProfile={isMyProfile} />
      <UserPosts userId={userProfileId} />
      {/* Render Followers/Following List */}
      <Switch>
        <Route path={Routes.USER_FOLLOWERS} component={FollowersPage} />
        <Route path={Routes.USER_FOLLOWING} component={FollowingPage} />
      </Switch>
    </div>
  )
}
