import React, { useState } from 'react';
import axios from 'axios';

const LSBDecrypt = () => {
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState(null);
    
    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
        //console.log(image);
    }

    const grabAPI = async (e) => {
        e.preventDefault();
        const newFormData = new FormData();
        console.log(image);
        newFormData.append('image', image);
            
            await axios.post('http://localhost:8000/api/lsb-decrypt/', newFormData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            }).then(response => {
                setMessage(response.data.message);
            })
    }

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

export default LSBDecrypt;