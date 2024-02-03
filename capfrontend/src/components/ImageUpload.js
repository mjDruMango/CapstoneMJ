// src/components/ImageUpload.js
import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
    const [image, setImage] = useState(null);
    const [imageData, setImageData] = useState(null);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleUpload = async () => {
        try {
            const formData = new FormData();
            formData.append('image', image);

            await axios.post('http://localhost:8000/api/test-upload/', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            }).then(response => {
                console.log(response);

                setImageData(response.data.image_data);
            })
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button onClick={handleUpload}>Upload Image</button>

            {imageData && (
                <div>
                    <h2>Uploaded Image</h2>
                    <img src={`data:image/jpeg;base64,${imageData}`} alt="Uploaded" />
                </div>
            )}
        </div>
    );
};

export default ImageUpload;
