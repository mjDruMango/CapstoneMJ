import React, { useState } from 'react';
import axios from 'axios';

import Input from '../../components/forms/Input';
import Card from '../../components/card/Card';
import Button from '../../components/button/Button';

export default function CaesarShiftEncrypt() {
    //State variables
    const [textData, setTextData] = useState(null);
    const [shift, setShift] = useState(null);

    const [encryptedText, setEncryptedText] = useState(null);

    //Define event handlers

    //update textData when text input changes
    const handleTextChange = (e) => {
        setTextData(e.target.value);
    };

    //Filters non-numeric values
    const handleShiftChange = (e) => {
        var shiftInput = e.target.value;
        shiftInput = shiftInput.replace(/[^0-9]/ig, "");//replace any non-numeric values with empty strings
        setShift(shiftInput);
    }

    //Send POST request to API with textData and shift values
    // - Returns encrypted text from API, sets it to encryptedText variable
    const grabAPI = async () => {
        const data = {
            'message': textData,
            'shift': shift
        }
        await axios.post('http://3.144.1.137:8000/caesar/encrypt/', data, {
            headers: { 'Content-Type': 'application/json' },
        }).then(response => {
            console.log(response);
            setEncryptedText(response.data.message);
        })
    };

    //Submission form, prevents page from reloading, validates input, calls grabAPI
    const handleSubmit = async (e) => {
        e.preventDefault();//Prevents page from reloading

        // Check that the text values are not null; otherwise return error message
        if (textData && shift) {
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
                            header="Caesar Encryption"
                            footer={encryptedText && (
                                <p className='text-white'>Encrypted Text: {encryptedText}</p>
                            )} >
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-2">
                                    <div>

                                        <Input
                                            label="Encryption Message"
                                            id="caesar-encrypt"
                                            placeholder="Message to Encrypt"
                                            onChange={handleTextChange}
                                        />
                                    </div>

                                    <div>
                                        <Input
                                            label="Encryption Key"
                                            id="caesar-encrypt"
                                            placeholder="Key to Encrypt"
                                            onChange={handleShiftChange}
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
                        header="How Does Caesar Encryption Work?"
                        className="opacity-75 leading-8 font-mono">
                        In a Caesar cipher, a single numerical key value, representing the number of positions to shift, is applied to every letter in the message. This key value essentially determines a fixed alphabet shift for the entire message. Each letter is then substituted with its corresponding letter in the shifted alphabet. For example, with a key value of 3, "A" becomes "D," "B" becomes "E," and so on. This process effectively encrypts the message by making it appear scrambled.
                    </Card>
                </div>
            </div>
        </>
    );
}