import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { HomePage } from './HomePage'
import Routes from '../../Routes'
import { useForm } from '../../hooks/useForm'
import { postLogin } from '../../network/backend'
import { useAuth } from '../auth/AuthWrapper'
import { useNotification } from '../common/NotificationSheet'

export const LoginPage = () => {
  const { showNotification } = useNotification()
  const { onLogin } = useAuth()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [, onSubmit, onChange] = useForm((values) => {
    const { email, password } = values
    setIsSubmitting(true)
    postLogin(email, password).then(
      (response) => {
        const { token } = response.data
        onLogin(token)
      },
      (error) => {
        const { error: errorMessage } = error.response.data
        showNotification(errorMessage)
        setIsSubmitting(false)
      }
    )
  })

  return (
    <HomePage>
      <h2 className="subtitle center">Enter with your credentials</h2>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Email"
          required
          onChange={onChange}
        />
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Password"
          required
          onChange={onChange}
        />
        <input
          type="submit"
          className="btn btn-primary btn-block"
          value="Login"
          disabled={isSubmitting}
        />
      </form>
      <h2 className="subtitle center grid-divider">OR</h2>
      <Link to={Routes.INDEX} className="btn btn-primary btn-block">
        Create an account
      </Link>
    </HomePage>
  )
}
