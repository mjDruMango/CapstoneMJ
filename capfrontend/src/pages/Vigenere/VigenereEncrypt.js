import React, { useState } from 'react';
import axios from 'axios';


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
        await grabAPI();
    };
    //Creating message box, encryption key box, submit button

    return (
        <>
            <div>
                <div className="mb-5 flex flex-col overflow-hidden rounded-lg bg-secondary shadow-sm ring-1 ring-primary">
                    <div className="bg-primary px-5 py-4 text-white">
                        <h3 className="font-medium">Vigenere Encryption</h3>
                    </div>
                    {/* Card Body */}
                    <div className="grow px-6 py-3 items-center text-white">
                        <form onSubmit={handleSubmit}>
                            <input type='text' placeholder='insert message' onChange={handleTextChange}
                                className='mt-1 focus:outline-none bg-primary block w-full block placeholder-white px-3 py-2 leading-6 rounded-lg text-white focus:border-primary disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:select-none'
                            />
                            <input type='text' placeholder='insert key' onChange={handleKeyChange}
                                className='mt-1 focus:outline-none bg-primary block w-full block placeholder-white px-3 py-2 leading-6 rounded-lg text-white focus:border-primary disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:select-none'
                            />
                            {/* <input type='text' placeholder='insert key' onChange={handleKeyChange} /> */}
                            <button className='bg-primary px-5 py-2 text-white rounded-md mt-3' type='submit'>Submit Encryption</button>
                        </form>
                        {encryptedText && (
                            <p className='bg-white'>Encrypted Text: {encryptedText}</p>
                        )}
                    </div>
                    {/* END Card Body */}

                    <div className="bg-primary/50 px-5 py-4 text-sm text-white/50">
                        Test Footer
                    </div>
                </div>


            </div>
        </>
    );
}