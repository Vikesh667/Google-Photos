import React, { useState, useRef } from 'react';

export default function InputImg() {
  const [image, setImage] = useState('');
  const [photo,setPhoto]=useState([])
  const inputRef = useRef(null);
  function handleOnSelectImage(e) {
    let reader = new FileReader();
    reader.onload = (e) => {
      setImage(photo.push(e.target.result));
    };
    reader.readAsDataURL(e.target.files[0])
  }

 console.log(photo)
  return (
    <div>
      <div>
        {image && (
          <div>
            <img src={image} height="40%" width="40%" />
          </div>
        )}
      </div>
      <input
        type="file"
        ref={inputRef}
        onChange={handleOnSelectImage}
        name="tweetPic"
      />
        
    </div>
  );
}