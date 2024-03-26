import React, { useState } from 'react';
import axios from 'axios';

import Input from '../../components/forms/Input';
import Card from '../../components/card/Card';
import Button from '../../components/button/Button';


export default function VigenereEncrypt() {
    //State variables
    const [textData, setTextData] = useState(null);
    const [key, setKey] = useState(null);

    const [encryptedText, setEncryptedText] = useState(null);

    //Define event handlers

    //Filters non-alphabetic values
    const handleKeyChange = (e) => {
        const keyInput = e.target.value.replace(/[^A-Za-z]/ig, "");//replace any characters that are not upper or lowercase letters with an empty string
        setKey(keyInput);
    };

    //update textData when text input changes
    const handleTextChange = (e) => {
        setTextData(e.target.value);
    };

    //Send POST request to API with textData and key values
    // - Returns encrypted text from API, sets it to encryptedText variable
    const grabAPI = async () => {
        const data = {
            'message': textData,
            'key': key
        }
        await axios.post('http://3.144.1.137:8000/vig/encrypt/', data, {
            headers: { 'Content-Type': 'application/json' },
        }).then(response => {
            console.log(response);
            setEncryptedText(response.data.message);
        })
    };

    //Submission form, prevents page from reloading, validates input, calls grabAPI
    const handleSubmit = async (e) => {
        e.preventDefault();//Prevent page from reloading

        // Check that the text values are not null; otherwise return error message
        if (textData && key) {
            await grabAPI();
        } else {
            setEncryptedText("Unable to encrypt without both a message and key!");
        }
    };
    //Creating message box, encryption key box, submit button, explanation box

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className='col-span-1 lg:col-span-2'>
                    <div>
                        <Card
                            className="bg-opacity-50 font-mono"
                            header="Vigenere Encryption"
                            footer={encryptedText && (
                                <p className='text-white'>Encrypted Text: {encryptedText}</p>
                            )} >
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-2">
                                    <div>

                                        <Input
                                            label="Encryption Message"
                                            id="vigenere-encrypt"
                                            placeholder="Message to Encrypt"
                                            onChange={handleTextChange}
                                        />
                                    </div>

                                    <div>
                                        <Input
                                            label="Encryption Key"
                                            id="vigenere-encrypt"
                                            placeholder="Key to Encrypt"
                                            onChange={handleKeyChange}
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
                </div>
                <div className='col-span-1 lg:col-span-1'>
                    <Card
                        header="How Does Vigenere Encryption Work?"
                        className="opacity-75 leading-8 font-mono">
                            The Vigenère cipher encrypts messages using a keyword. Each letter in the message is shifted by a varying amount, determined by the corresponding letter in the keyword. This shifting amount is based on the distance between the message letter and the keyword letter in the alphabet.
                    </Card>
                </div>
            </div>
        </>
    );
}