import React, {useState, useRef, useContext} from 'react';
import { postUploadImage, postCreatePost } from '../../network/backend';
import { GlobalNotificationContext } from '../common/NotificationSheet';
import { useHistory } from 'react-router-dom';
import Routes from '../../Routes';

const defaultState = {
  pictureId: null,
  pictureUrl: null, 
  title: '', 
  isUploading: false
};

export const AddPostPage = () => {

    const maxTitle = 144;
    const [{pictureId, pictureUrl, title, isUploading}, set] = useState(defaultState);
    const inputRef = useRef(null);
    const {showNotification} = useContext(GlobalNotificationContext);
    const history = useHistory();

    const charsLeft = maxTitle - title.length; 

    const counterColor = charsLeft >= 80 
        ? null 
        : (charsLeft <= 40 ? 'orangered' : 'orange');

    const onUploadClick = (e) => {
        inputRef.current.click();
    };

    const onFileChange = (e) => {
      const image = e.target.files && e.target.files[0];
      if (image) {
        set(state => ({...state, isUploading: true}));
        postUploadImage(image).then(response => {
          const {id, url} = response.data;
          set(state => ({...state, pictureId: id, pictureUrl: url, isUploading: false}));
        }, error => {
          const {status} = error.response;
          if (status === 413) { // Entity too large
            showNotification('Picture is too large. Max. of 5MB.');  
          } else {
            const {error: errorMessage} = error.response.data;
            showNotification(errorMessage);
          }
          set(state => ({...state, isUploading: false}));
        });
      }
    };

    const onTitleChange = (e) => {
      const title = e.target.value;
      set(state => ({...state, title: title}));
    }

    const onSave = () => {
      console.log('on Upload');
      if (title.length < 3) {
        showNotification('You need to write a litle. Cmon, a picture without text is boring.');
        return;
      }
      if (pictureId === null) {
        showNotification('A post without a picture is sad😞 Please, upload a picture.');
      }

      set((state) => ({...state, isUploading: true}));
      postCreatePost(pictureId, title).then(response => {
        showNotification('Post created! 🎉', false);
        history.push(Routes.TIMELINE);
      }, error => {
        showNotification('Something went wrong. Please try again.');
        set(state => ({...state, isUploading: false}));
      });
    };

    const _renderUploadForm = () => {
      return(
        <div className="upload-img-container">
          <button className="btn btn-primary" 
                  disabled={isUploading}
                  onClick={onUploadClick}>
            Upload a picture (max. 5MB)
          </button>
          <input type="file" 
              accept="image/jpg,image/jpeg,image/png"
              style={{display: "none"}} 
              onChange={onFileChange}
              ref={inputRef}/>
      </div>
      );
    };

    return(
        <div className="add-post-container">
          {pictureUrl 
            ? <img src={pictureUrl} alt="uploaded to post"/>
            : _renderUploadForm()
          }
          <div className="post-title-container">
              <textarea placeholder="Add some text" 
                      maxLength="144"
                      onChange={onTitleChange}/>
              <span style={{backgroundColor: counterColor}} className="title-counter">{charsLeft} characters</span>
          </div>
          <button className="btn btn-primary save-post" onClick={onSave} disabled={isUploading}>Send</button>
        </div>
    );
};