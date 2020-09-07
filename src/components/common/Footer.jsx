import React from 'react'
import { Link } from 'react-router-dom'
import Routes from '../../Routes'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <ul>
        <li>
          <Link to={Routes.ABOUT}>About</Link>
        </li>
        <li>
          <Link to={Routes.HELP}>Help</Link>
        </li>
        <li>
          <Link to={Routes.PRIVACY}>Privacy</Link>
        </li>
        <li>
          <a href="https://book.reactgram.dev/">Read the Book</a>
        </li>
      </ul>
      <h2 className="subtitle">
        <Link to={Routes.LOGIN}>© {currentYear} Reactgram</Link>
      </h2>
    </footer>
  )
}
