import React, { useState } from 'react';
import axios from 'axios';

const CaesarDecrypt = () => {
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

        await grabAPI();
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='insert message' onChange={handleTextChange}/>
                <input type='number' placeholder='insert shift number' onChange={handleShiftChange}/>
                <button type='submit'>Submit</button>
            </form>
            {decryptedText && (
                <p>Decrypted Text: {decryptedText}</p>
            )}
        </div>
    );
}

export default CaesarDecrypt