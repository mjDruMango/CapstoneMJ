import React, { useState } from 'react';
import axios from 'axios';

const VigEncrypt = () => {
    const [textData, setTextData] = useState(null);
    const [key, setKey] = useState(null);

    const [encryptedText, setEncryptedText] = useState(null);

    const handleKeyChange = (e) => {
        var keyInput = e.target.value;
        keyInput = keyInput.replace(/[^A-Za-z]/ig, "");
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
        await axios.post('http://localhost:8000/api/vig-encrypt/', data, {
                headers: { 'Content-Type': 'application/json' },
            }).then(response => {
                console.log(response);
                setEncryptedText(response.data.message);
            })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await grabAPI();
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='insert message' onChange={handleTextChange}/>
                <input type='text' placeholder='insert key' onChange={handleKeyChange}/>
                <button type='submit'>Submit</button>
            </form>
            {encryptedText && (
                <p>Encrypted Text: {encryptedText}</p>
            )}
        </div>
    );
}

export default VigEncrypt;