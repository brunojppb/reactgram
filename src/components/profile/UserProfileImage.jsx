import React from 'react'
import placeholder from '../../img/placeholder.svg'

export const UserProfileImage = ({ src, ...props }) => {
  const url = src || placeholder
  return <img className={props.className} src={url} alt="profile" />
}
