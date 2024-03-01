import React, { useState } from 'react';
import axios from 'axios';

import Input from '../../components/forms/Input';
import Card from '../../components/card/Card';
import Button from '../../components/button/Button';

export default function CaesarShiftDecrypt() {
    const [textData, setTextData] = useState(null);
    const [shift, setShift] = useState(null);

    const [decryptedText, setDecryptedText] = useState(null);

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
        await axios.post('http://localhost:8000/caesar/decrypt/', data, {
            headers: { 'Content-Type': 'application/json' },
        }).then(response => {
            console.log(response);
            setDecryptedText(response.data.message);
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check that the text values are not null otherwise return
        if (textData && shift) {
            await grabAPI();
        } else {
            setDecryptedText("Unable to decrypt without both a message and key!");
        }
    };
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className='col-span-1 lg:col-span-2'>
                    <div>
                        <Card
                            header="Caesar Decryption"
                            footer={decryptedText && (
                                <p className='text-white'>Decrypted Text: {decryptedText}</p>
                            )} >
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-2">
                                    <div>

                                        <Input
                                            label="Decryption Message"
                                            id="caesar-decrypt"
                                            placeholder="Message to Decrypt"
                                            onChange={handleTextChange}
                                        />
                                    </div>

                                    <div>
                                        <Input
                                            label="Decryption Key"
                                            id="caesar-decrypt"
                                            placeholder="Key to Decrypt"
                                            onChange={handleShiftChange}
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
                        header="How Does Caesar Decryption Work?"
                        className="opacity-75 leading-8">Decrypting a Caesar cipher involves reversing the encryption process. We utilize the same numerical key value used for encryption, which represents the number of positions to shift. However, instead of shifting forward, each letter in the ciphertext is shifted backward by the key value. This effectively undoes the original shift and reveals the original message. For instance, if the key value is 3, "D" becomes "A," "E" becomes "B," and so on. By performing this backward shift on every letter based on the key, we recover the original message from its seemingly scrambled form.</Card>
                </div>
            </div>
        </>
    );
}