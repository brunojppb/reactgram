import React, {useState, useRef} from 'react';

export const AddPostPage = () => {

    const maxTitle = 144;
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const inputRef = useRef(null);

    const onClick = (e) => {
        inputRef.current.click();
    };
    const charsLeft = maxTitle - title.length; 

    const counterColor = charsLeft >= 80 
        ? null 
        : (charsLeft <= 40 ? 'orangered' : 'orange');
    
    const disableButton = title.length === 0 || image === null;

    return(
        <div className="add-post-container">
            <div className="upload-img-container">
                <button className="btn btn-primary" onClick={onClick}>Enviar uma foto (max. 2MB)</button>
                <input type="file" 
                    accept="image/jpg,image/jpeg,image/png"
                    style={{display: "none"}} 
                    ref={inputRef}/>
            </div>
            <div className="post-title-container">
                <textarea placeholder="Adicione uma legenda" 
                        maxLength="144" 
                        onChange={(e) => setTitle(e.target.value)}/>
                <span style={{backgroundColor: counterColor}} className="title-counter">{charsLeft} caracteres</span>
            </div>
            <button className="btn btn-primary save-post" disabled={disableButton}>Postar</button>
        </div>
    );
};