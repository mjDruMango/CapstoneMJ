import React, { useState } from 'react';
import axios from 'axios';

import Input from '../../components/forms/Input';
import Card from '../../components/card/Card';
import Button from '../../components/button/Button';

export default function VigenereDecrypt() {
    //State variables
    const [textData, setTextData] = useState(null);
    const [key, setKey] = useState(null);

    const [decryptedText, setDecryptedText] = useState(null);

    //Define event handlers

    //Filters non-alphabetic values
    const handleKeyChange = (e) => {
        var keyInput = e.target.value;
        keyInput = keyInput.replace(/[^A-Za-z]/ig, "");//replace any characters that are not upper or lowercase letters with an empty string
        setKey(keyInput);
    };

    //update textData when text input changes
    const handleTextChange = (e) => {
        setTextData(e.target.value);
    };

    //Send POST request to API with textData and key values
    // - Returns decrypted text from API, sets it to decryptedText variable
    const grabAPI = async () => {
        const data = {
            'message': textData,
            'key': key
        }
        await axios.post('http://3.143.1.216:8000/vig/decrypt/', data, {
            headers: { 'Content-Type': 'application/json' },
        }).then(response => {
            console.log(response);
            setDecryptedText(response.data.message);
        })
    };

    //Submission form, prevents page from reloading, validates input, calls grabAPI
    const handleSubmit = async (e) => {
        e.preventDefault();//Prevent page from reloading

        // Check that the text values are not null; otherwise return error message
        if (textData && key) {
            await grabAPI();
        } else {
            setDecryptedText("Unable to decrypt without both a message and key!");
        }
    };
    //Creating message box, decryption key box, submit button, explanation box

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className='col-span-1 lg:col-span-2'>
                    <div>
                        <Card
                            className="bg-opacity-50 font-mono"
                            header="Vigenere Decryption"
                            footer={decryptedText && (
                                <p className='text-white'>Decrypted Text: {decryptedText}</p>
                            )} >
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-2">
                                    <div>

                                        <Input
                                            label="Decryption Message"
                                            id="vigenere-decrypt"
                                            placeholder="Message to Decrypt"
                                            onChange={handleTextChange}
                                        />
                                    </div>

                                    <div>
                                        <Input
                                            label="Decryption Key"
                                            id="vigenere-decrypt"
                                            placeholder="Key to Decrypt"
                                            onChange={handleKeyChange}
                                        />
                                    </div>
                                </div>

                                <Button
                                    type="submit">
                                    Submit Decryption
                                </Button>
                            </form>
                        </Card>
                    </div>
                </div>
                <div className='col-span-1 lg:col-span-1'>
                    <Card
                        header="How Does Vigenere Decryption Work?"
                        className="opacity-75 leading-8 font-mono">
                        To decrypt a Vigenère cipher, we follow the same principle used for encryption, but in reverse. The keyword is used again, and each letter in the ciphertext (encrypted message) is shifted back by a varying amount based on the corresponding letter in the keyword. This shifting amount corresponds to the distance between the ciphertext letter and the keyword letter in the alphabet. By reversing the original shifts, we recover the original message.
                    </Card>
                </div>
            </div>
        </>
    );
}