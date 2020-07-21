import React, { useRef } from "react";
import user from '../../assets/user.svg';
import "./profile-pic-uploader.css";

const ProfilePicUploader=(props)=> {
  const {
    imageUrl,
    updateImageUrl,
    accessToken
  } = props;

  console.log(imageUrl, 'imageUrl');

  // const [imageUrl, setImageUrl] = useState("");
  const inputFile = useRef(null);

  const uploadImage = event => {
    event.preventDefault();
    const image = inputFile.current.files[0];
    const formData = new FormData();

    formData.append("file", image);
    formData.append("upload_preset", "b28h3vsg");

    const options = {
      method: "POST",
      body: formData
    };

    const url = "https://api.cloudinary.com/v1_1/coveed/image/upload";
    fetch(url, options)
      .then(res => res.json())
      .then(data => {
        updateImageUrl(data.secure_url);
        console.log(formData)
      })
      .catch(console.error);

    updateProfile();
  };

  const updateProfile =()=>{
    fetch('https://fast-hamlet-28566.herokuapp.com/api/user_image', {
      method: 'PUT',
      headers: {
        'access-token': accessToken
      },
      body: JSON.stringify({
        image_url:imageUrl
      })
    })
  }
  

  return (
    <div className={`profile-pic-uploader ${props.openUploader ? "visible-uploader":"invisible-uploader" }`}>
        <div className="profile-pic-uploader-main">
            <h3>Upload Profile Picture</h3>
            <div className={`image-div ${ !uploadImage ? "invisible-picture" : "visible-picture" }`}>
                <img src={imageUrl || user} alt="Profile"/>
            </div>
            <form onSubmit={uploadImage}>
                <input ref={inputFile} type="file" accept="image/*" multiple={false}/>
                <input type="submit" value="UPLOAD" className="upload-btn" onClick={props.showUploader}/>
            </form>
        </div>
        <div className="mask" onClick={props.showUploader}></div>
    </div>
  );
}

export default ProfilePicUploader;
