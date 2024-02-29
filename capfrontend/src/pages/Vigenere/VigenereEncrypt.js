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

    //#region Event H

    //#region Event Handlers
    const handleKeyChange = (e) => {
        const keyInput = e.target.value.replace(/[^A-Za-z]/ig, "");
        setKey(keyInput);
    };

    const handleTextChange = (e) => {
        setTextData(e.target.value);
    };

    const grabAPI = async () => {
        const data = {
            'message': textData,
            'key': key
        }

        //Send POST request to API, get back encrypted text
        await axios.post('http://localhost:8000/vig/encrypt/', data, {
            headers: { 'Content-Type': 'application/json' },
        }).then(response => {
            console.log(response);
            setEncryptedText(response.data.message);
        })
    };
    //#endregion

    const handleSubmit = async (e) => {
        e.preventDefault();//Prevent page from reloading

        // Check that the text values are not null otherwise return
        if (textData && key) {
            await grabAPI();
        } else {
            setEncryptedText("Unable to encrypt without both a message and key!");
        }
    };
    //Creating message box, encryption key box, submit button

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className='col-span-1 lg:col-span-2'>
                    <div>
                        <Card
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
                        header="How does this work?"
                        className="opacity-75">Lorem Ipsum</Card>
                </div>
            </div>
        </>
    );
}