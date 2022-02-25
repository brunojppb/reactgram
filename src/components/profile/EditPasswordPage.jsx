import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { useNotification } from '../common/NotificationSheet'
import { putUpdatePassword } from '../../network/backend'

export const EditPasswordPage = () => {
  const { showNotification } = useNotification()
  const [isLoading, setIsLoading] = useState(false)

  const [, onSubmit, onChange] = useForm(
    (values) => {
      const { password, passwordConfirmation } = values
      if (password !== passwordConfirmation) {
        showNotification("Password and Password Confirmation don't match.")
        return
      }
      if (password.length < 6) {
        showNotification('Password is too short. min. of 6 characters')
        return
      }
      setIsLoading(true)
      putUpdatePassword(password, passwordConfirmation).then(
        (response) => {
          setIsLoading(false)
          showNotification('Your password has been updated.', false)
        },
        (error) => {
          const { error: errorMessage } = error.response.data
          setIsLoading(false)
          showNotification(errorMessage)
        }
      )
    },
    { password: '', passwordConfirmation: '' }
  )

  return (
    <form className="edit-profile-container" onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="password">New Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="New Password"
          className="form-control"
          onChange={onChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="passwordConfirmation">Password Confirmation</label>
        <input
          type="password"
          id="passwordConfirmation"
          name="passwordConfirmation"
          placeholder="Password Confirmation"
          className="form-control"
          onChange={onChange}
          required
        />
      </div>
      <div className="form-group">
        <div></div>
        <div>
          <input
            type="submit"
            className="btn btn-primary"
            value="Save"
            disabled={isLoading}
          />
        </div>
      </div>
    </form>
  )
}
