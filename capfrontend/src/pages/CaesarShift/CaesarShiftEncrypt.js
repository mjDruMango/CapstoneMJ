import React, { useState } from 'react';
import axios from 'axios';

import Input from '../../components/forms/Input';
import Card from '../../components/card/Card';
import Button from '../../components/button/Button';

export default function CaesarShiftEncrypt() {
    const [textData, setTextData] = useState(null);
    const [shift, setShift] = useState(null);

    const [encryptedText, setEncryptedText] = useState(null);

    const handleTextChange = (e) => {
        setTextData(e.target.value);
    };

    const handleShiftChange = (e) => {
        var shiftInput = e.target.value;
        shiftInput = shiftInput.replace(/[^0-9]/ig, "");
        setShift(shiftInput);
    }

    const grabAPI = async () => {
        const data = {
            'message': textData,
            'shift': shift
        }
        await axios.post('http://localhost:8000/caesar/encrypt/', data, {
            headers: { 'Content-Type': 'application/json' },
        }).then(response => {
            console.log(response);
            setEncryptedText(response.data.message);
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check that the text values are not null otherwise return
        if (textData && shift) {
            await grabAPI();
        } else {
            setEncryptedText("Unable to encrypt without both a message and key!");
        }
    };
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className='col-span-1 lg:col-span-2'>
                    <div>
                        <Card
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
                        header="How does this work?"
                        className="opacity-75">Lorem Ipsum</Card>
                </div>
            </div>
        </>
    );
}