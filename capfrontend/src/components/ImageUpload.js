import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
    const [image, setImage] = useState(null);
    const [text, setText] = useState(null);

    const [encryptImage, setEncryptImage] = useState(null);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        try {
            const newFormData = new FormData();

            newFormData.append('image', image);
            newFormData.append('inputText', text);
            
            await axios.post('http://localhost:8000/api/test-upload/', newFormData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            }).then(response => {
                setEncryptImage(response.data.image_data);
            })
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    const handleDownload = () => {
        const link = document.createElement("a");
        
        link.href = `data:image/png;base64,${encryptImage}`;

        link.download = "encryptedImage.png";
        link.click();
    }

    return (
        <div className="dark-background">
            <form onSubmit={handleUpload}>
                <input
                        type="file" 
                        name="encryptImage"
                        accept="image/*" 
                        onChange={handleImageChange} 
                    />

                <input 
                    type="text"
                    name="encryptText"
                    placeholder="Type Message Here"
                    onChange={handleTextChange}
                />

                <button type="submit" onClick={handleUpload}>Submit</button>
            </form>


            {encryptImage && (
                <div>
                    <h2>Uploaded Image</h2>
                    <img src={`data:image/png;base64,${encryptImage}`} alt="Uploaded" />

                    <button onClick={handleDownload}>Download Image</button>
                </div>
            )}
        </div>
    );
};

export default ImageUpload;
