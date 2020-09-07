import React from 'react'
import empty from '../../img/empty.svg'
import { Layout } from '../static/Layout'

export const NotFound = () => {
  return (
    <Layout>
      <div className="page-not-found-container" style={{ textAlign: 'center' }}>
        <img src={empty} alt="sobre" className="static-page-img" />
        <h2 style={{ marginTop: 32 }}>Page not found</h2>
        <p>Looks like this page was removed or doesn't exist</p>
      </div>
    </Layout>
  )
}
