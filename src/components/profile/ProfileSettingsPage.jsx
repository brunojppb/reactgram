import React from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'
import Routes from '../../Routes'
import { useAuth } from '../auth/AuthWrapper'
import { EditProfilePage } from './EditProfilePage'
import { EditPasswordPage } from './EditPasswordPage'

const SettingsSidebar = () => {
  const { onLogout } = useAuth()

  return (
    <ul>
      <li>
        <NavLink exact to={Routes.SETTINGS} activeClassName="active">
          Edit Profile
        </NavLink>
      </li>
      <li>
        <NavLink to={Routes.CHANGE_PASSWORD} activeClassName="active">
          Change Password
        </NavLink>
      </li>
      <li>
        <button className="link" onClick={() => onLogout()}>
          Logout
        </button>
      </li>
    </ul>
  )
}

export const ProfileSettingsPage = () => {
  return (
    <div className="profile-settings-container">
      <div className="settings-menu">
        <SettingsSidebar />
      </div>
      <div className="settings-content">
        <Switch>
          <Route path={Routes.SETTINGS} exact component={EditProfilePage} />
          <Route path={Routes.CHANGE_PASSWORD} component={EditPasswordPage} />
        </Switch>
      </div>
    </div>
  )
}
