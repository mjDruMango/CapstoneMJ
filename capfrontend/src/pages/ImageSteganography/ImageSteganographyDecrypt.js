import React, { useState } from 'react';
import axios from 'axios';

import Input from '../../components/forms/Input';
import Card from '../../components/card/Card';
import Button from '../../components/button/Button';

export default function ImageSteganographyDecrypt() {
    //State variables
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState(null);

    //Define event handlers

    //update image when file input changes
    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    }

    //Form submission
    const grabAPI = async (e) => {
        e.preventDefault(); //Prevents page from reloading

        //Construct FormData object
        const newFormData = new FormData();
        console.log(image); //Testing purposes
        newFormData.append('image', image);

        //Send POST request to API, returns extracted message from API
        await axios.post('http://3.143.1.216:8000/lsb/decrypt/', newFormData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        }).then(response => {
            setMessage(response.data.message);
        })
    }

    //Creating image upload button, submit button, explanation box
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className='col-span-1 lg:col-span-2'>
                    <Card
                        className="bg-opacity-50 font-mono"
                        header="Image Steganography Decryption"
                        footer={image && message && (
                            <p className='text-white'>Decrypted Message: {message}</p>
                        )} >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-2">
                            <div>
                                <Input
                                    label="Decryption Image"
                                    id="imagesteganography-decrypt"
                                    placeholder="Message to Decrypt"
                                    onChange={handleImageChange}
                                    type="file"
                                    accept="image/*"
                                />
                            </div>
                        </div>
                        <Button
                            type="submit"
                            onClick={grabAPI}>
                            Submit Decryption
                        </Button>
                    </Card>
                </div>

                <div className='col-span-1 lg:col-span-1'>
                    <Card
                        header="How Does Steganographic Decryption Work?"
                        className="opacity-75 leading-8 font-mono">
                        Decrypting an LSB-steganographed file involves extracting the hidden message. The carrier file, like an image or audio, is analyzed, and the least significant bits (LSBs) of each unit (e.g., pixel or audio sample) are extracted. These extracted bits are then reassembled to form the original binary message, which can be further converted back to its original form (text, image, etc.) depending on how it was initially encoded.
                    </Card>
                </div>
            </div>
        </>
    );
}