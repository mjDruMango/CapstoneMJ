import React, { useState } from 'react';
import axios from 'axios';

import Input from '../../components/forms/Input';
import Card from '../../components/card/Card';
import Button from '../../components/button/Button';

export default function ImageSteganographyEncrypt() {
    //State variables
    const [image, setImage] = useState(null);
    const [text, setText] = useState(null);

    const [encryptImage, setEncryptImage] = useState(null);

    //Define event handlers

    //update image when file input changes
    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    //update text when text input changes
    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    //Form submission
    const handleUpload = async (e) => {
        e.preventDefault(); //Prevent page from reloading

        //Construct FormData object
        try {
            const newFormData = new FormData();

            newFormData.append('image', image);
            newFormData.append('inputText', text);

            //Send POST request to API, updates encryptImage with encrypted image data from API
            await axios.post('http://3.144.1.137:8000/lsb/encrypt/', newFormData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            }).then(response => {
                setEncryptImage(response.data.image_data);
            })
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    const handleDownload = () => {

        //Creates temporary link with encrypted image data
        const link = document.createElement("a");

        link.href = `data:image/png;base64,${encryptImage}`;

        link.download = "encryptedImage.png";
        link.click();
    }

    //Creating text box, image upload button, submit button, download button, explanation box
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className='col-span-1 lg:col-span-2'>
                    <Card
                        className="bg-opacity-50 font-mono"
                        header="Image Steganography Encryption"
                        footer={encryptImage && (
                            <>
                                <img src={`data:image/png;base64,${encryptImage}`} alt="Uploaded" />
                                <Button
                                    onClick={handleDownload}
                                >
                                    Download Image
                                </Button>
                            </>
                        )} >
                        <form onSubmit={handleUpload}>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-2">
                                <div>

                                    <Input
                                        label="Encryption Image"
                                        id="imgsteg-encrypt"
                                        type="file"
                                        accept="image/*"
                                        placeholder="Message to Encrypt"
                                        onChange={handleImageChange}
                                    />
                                </div>

                                <div>
                                    <Input
                                        label="Encryption Text"
                                        id="imgsteg-encrypt"
                                        placeholder="Encryption Text"
                                        onChange={handleTextChange}
                                    />
                                </div>
                            </div>

                            <Button
                                type="submit">
                                Submit Encryption
                            </Button>
                        </form>
                    </Card>
                </div>
                <div className='col-span-1 lg:col-span-1'>
                    <Card
                        header="How Does Steganographic Encryption Work?"
                        className="opacity-75 leading-8 font-mono">
                        Unlike encryption, LSB (Least Significant Bit) is a steganography technique that hides data within another file, like an image. It works by converting the secret message into binary and replacing the least impactful bits (LSBs) of the carrier file with those bits. These subtle changes, often in color or sound, are usually undetectable, making the embedded message appear invisible.
                    </Card>
                </div>
            </div>
        </>
    );
};