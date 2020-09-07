import React, { useContext, useState, useRef } from 'react'
import { useAuth } from '../auth/AuthWrapper'
import { UserProfileImage } from './UserProfileImage'
import { useForm } from '../../hooks/useForm'
import {
  putUpdateProfile,
  postUploadImage,
  postUpdateProfilePicture,
} from '../../network/backend'
import { GlobalNotificationContext } from '../common/NotificationSheet'

export const EditProfilePage = () => {
  const { user, updateUser } = useAuth()
  const { showNotification } = useContext(GlobalNotificationContext)
  const [isUpdating, setIsUpdating] = useState(false)
  const inputRef = useRef(null)

  // Update user profile
  const [, handleSubmit, handleChange] = useForm(
    (values) => {
      const { firstName, lastName } = values
      setIsUpdating(true)
      putUpdateProfile(firstName, lastName).then((response) => {
        const { user: updatedUser } = response.data
        updateUser(updatedUser)
        setIsUpdating(false)
        showNotification('Profile updated', false)
      })
    },
    { firstName: user.firstName, lastName: user.lastName }
  )

  // update user picture
  const onFileChange = async (event) => {
    const image = event.target.files && event.target.files[0]

    if (image) {
      try {
        setIsUpdating(true)
        const {
          data: { id: pictureId },
        } = await postUploadImage(image)
        const {
          data: { user },
        } = await postUpdateProfilePicture(pictureId)
        updateUser(user)
        showNotification('Picture updated', false)
      } catch (e) {
        console.error('could not update user profile', e)
      } finally {
        setIsUpdating(false)
      }
    }
  }

  return (
    <div className="edit-profile-container">
      <div className="form-group">
        <UserProfileImage src={user.pictureUrl} className="user-img" />
        <div className="edit-picture">
          <span>{`${user.firstName} ${user.lastName}`}</span>
          <button
            className="link upload"
            disabled={isUpdating}
            onClick={() => inputRef.current.click()}
          >
            Update Picture
          </button>
          <input
            type="file"
            accept="image/jpg,image/jpeg,image/png"
            style={{ display: 'none' }}
            ref={inputRef}
            onChange={onFileChange}
          />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">Nome</label>
          <input
            id="firstName"
            name="firstName"
            placeholder="First Name"
            className="form-control"
            onChange={handleChange}
            required
            defaultValue={user.firstName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Sobrenome</label>
          <input
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            className="form-control"
            onChange={handleChange}
            required
            defaultValue={user.lastName}
          />
        </div>
        <div className="form-group">
          <div></div>
          <div>
            <input
              type="submit"
              value="Save"
              className="btn btn-primary"
              disabled={isUpdating}
            />
          </div>
        </div>
      </form>
    </div>
  )
}
