import React, { useContext, useState, useRef } from 'react';
import { AuthContext } from '../auth/AuthWrapper';
import { UserProfileImage } from './UserProfileImage';
import { useForm } from '../../hooks/useForm';
import { putUpdateProfile, postUploadImage, postUpdateProfilePicture } from '../../network/backend';

export const EditProfilePage = () => {

  const {user, updateUser} = useContext(AuthContext);
  const [isUpdating, setIsUpdating] = useState(false);
  const inputRef = useRef(null);

  // Update user profile
  const [, handleSubmit, handleChange] = useForm((values) => {
    const {firstName, lastName} = values;
    setIsUpdating(true);
    putUpdateProfile(firstName, lastName).then(response => {
      const {user: updatedUser} = response.data;
      updateUser(updatedUser);
      setIsUpdating(false);
    });
  }, {firstName: user.firstName, lastName: user.lastName});

  // update user picture
  const onFileChange = async (event) => {
    const image = event.target.files && event.target.files[0];
    
    if (image) {
      try {
        setIsUpdating(true);
        const {data: {id: pictureId}} = await postUploadImage(image);
        const {data: {user}} = await postUpdateProfilePicture(pictureId);
        updateUser(user);
      } catch (e) {
        console.error('could not update user profile', e);
      } finally {
        setIsUpdating(false);
      }
    }
  }

  return(
    <div className="edit-profile-container">
      <div className="form-group">
        <UserProfileImage src={user.pictureUrl} className="user-img"/>
        <div className="edit-picture">
          <span>{`${user.firstName} ${user.lastName}`}</span>
          <button className="link upload" 
                  disabled={isUpdating}
                  onClick={() => inputRef.current.click()}>Atualizar foto</button>
          <input type="file" 
                    accept="image/jpg,image/jpeg,image/png"
                    style={{display: "none"}} 
                    ref={inputRef} onChange={onFileChange}/>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">Nome</label>
          <input id="firstName"name="firstName" placeholder="Nome" className="form-control" onChange={handleChange} required defaultValue={user.firstName}/>
        </div>
        <div className="form-group">
        <label htmlFor="lastName">Sobrenome</label>
          <input id="lastName" name="lastName" placeholder="Sobrenome" className="form-control" onChange={handleChange} required defaultValue={user.lastName}/>
        </div>
        <div className="form-group">
          <div></div>
          <div>
            <input type="submit" value="salvar" className="btn btn-primary" disabled={isUpdating}/>
          </div>
        </div>
      </form>
    </div>
  );

};