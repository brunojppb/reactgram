import React from 'react'
import { Footer } from '../common/Footer'
import { Link } from 'react-router-dom'
import Routes from '../../Routes'

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div
        className="home-wrapper"
        style={{ margin: 'auto', padding: 16, maxWidth: 935, gridGap: 16 }}
      >
        <h1>
          <Link to={Routes.INDEX}>Reactgram</Link>
        </h1>
        {children}
        <Footer />
      </div>
    </React.Fragment>
  )
}
