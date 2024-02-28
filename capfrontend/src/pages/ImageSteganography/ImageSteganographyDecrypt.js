import React, { useState } from 'react';
import axios from 'axios';

export default function ImageSteganographyDecrypt() {
    //State variables
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState(null);
    
    //Define event handlers
    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    }

    const grabAPI = async (e) => {
        e.preventDefault(); //Prevents page from reloading

        //Construct FormData object
        const newFormData = new FormData();
        console.log(image); //Testing purposes
        newFormData.append('image', image);
            
            //Send POST request to API, returns extracted message
            await axios.post('http://localhost:8000/lsb/decrypt/', newFormData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            }).then(response => {
                setMessage(response.data.message);
            })
    }

    //Creating image upload button, submit button
    return(
        <div>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button type='submit' onClick={grabAPI}>Submit</button>
            {image && message && (
                <p>message: {message}</p>
            )}
        </div>
    );
}