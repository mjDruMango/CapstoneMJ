import React from 'react';
import '../MatrixRain.css'
import { useEffect, useState } from 'react';

const MatrixRain = () => {
    //State variable
    const [speed, setSpeed] = useState(70);

    //Handle side-effects
    useEffect(() => {
        //Get canvas and 2D rendering component
        const canvas = document.getElementById('Matrix');
        const context = canvas.getContext('2d');

        //Set canvas width and height to current window size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        //Animation characters
        const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
        const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const nums = '0123456789';
        const alphabet = katakana + latin + nums;

        //Set font size, calculate number of columns based on canvas width
        const fontSize = 16;
        const columns = Math.floor(canvas.width / fontSize);
        const rainDrops = Array.from({ length: columns }, () => Math.floor(Math.random() * canvas.height / fontSize));

        //Render each frame of animation
        const draw = () => {
            context.fillStyle = 'rgba(0, 0, 0, 0.05)';//Set background color
            context.fillRect(0, 0, canvas.width, canvas.height);//Fill background
            context.fillStyle = '#4f014f';//Set text color
            context.font = fontSize + 'px arial';//Set font style and sizing

            //Iterate through the rainDrops array, render each character at its position
            for (let i = 0; i < rainDrops.length; i++) {
                const text = alphabet[Math.floor(Math.random() * alphabet.length)];
                context.fillText(text, i * fontSize, rainDrops[i] * fontSize);
                //If character reaches bottom of screen, reset position at random
                if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    rainDrops[i] = -fontSize;
                }
                //Update character position, apply constant speed
                rainDrops[i]++;
            }
        };

        //Update animation at specified interval
        const updateCanvas = () => {
            draw();
            setTimeout(updateCanvas, speed);//Set delay based on 'speed' variable
        };

        //Start animation
        updateCanvas();

        //Clean-up side effects on unmount
        return () => {
            clearTimeout(updateCanvas);
        };
    }, []);

    return <canvas id="Matrix"></canvas>;
};

export default MatrixRain;


