import React from 'react'
import { MenuOverlay } from '../common/MenuOverlay'
import { Link } from 'react-router-dom'
import Routes from '../../Routes'
import { useAuth } from '../auth/AuthWrapper'

export const SettingsMenuOverlay = ({ onClose }) => {
  const { onLogout } = useAuth()

  return (
    <MenuOverlay onClose={onClose}>
      <ul className="settings-menu-overlay">
        <li>
          <Link to={Routes.SETTINGS}>Edit Profile</Link>
        </li>
        <li>
          <Link to={Routes.CHANGE_PASSWORD}>Change Password</Link>
        </li>
        <li>
          <button className="link" onClick={() => onLogout()}>
            Logout
          </button>
        </li>
      </ul>
    </MenuOverlay>
  )
}
