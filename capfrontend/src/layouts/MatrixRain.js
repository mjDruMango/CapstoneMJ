import React from 'react';
import '../MatrixRain.css'
import { useEffect, useState } from 'react';

const MatrixRain = () => {
    //State matrix rain falling speed level
    const [speed, setSpeed] = useState(70);

    useEffect(() => {
        //Get canvas element and 2D rendering
        const canvas = document.getElementById('Matrix');
        const context = canvas.getContext('2d');

        //Set canvas width and height to window size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        //Characters used in animation
        const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
        const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const nums = '0123456789';
        const alphabet = katakana + latin + nums;

        //Set font size and calculate number of columns based on canvas width
        const fontSize = 16;
        const columns = Math.floor(canvas.width / fontSize);
        const rainDrops = Array.from({ length: columns }, () => Math.floor(Math.random() * canvas.height / fontSize));

        //Render each frame of animation
        const draw = () => {
            context.fillStyle = 'rgba(0, 0, 0, 0.05)';//Set background fill color
            context.fillRect(0, 0, canvas.width, canvas.height);//Fill background
            context.fillStyle = '#4f014f';//Text color
            context.font = fontSize + 'px arial';//Font size and style

            //Iterate through rainDrops array and render each character at its position
            for (let i = 0; i < rainDrops.length; i++) {
                const text = alphabet[Math.floor(Math.random() * alphabet.length)];
                context.fillText(text, i * fontSize, rainDrops[i] * fontSize);
                //If character reaches bottom of screen, reset position at random
                if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    rainDrops[i] = -fontSize;
                }
                //Update character's position, apply constant speed
                rainDrops[i]++;
            }
        };

        //Update animation at specific interval
        const updateCanvas = () => {
            draw();
            setTimeout(updateCanvas, speed);//Delay based on 'speed' variable
        };

        //Start animation
        updateCanvas();

        //Clean side-effects when component unmounts
        return () => {
            clearTimeout(updateCanvas);
        };
    }, []);
    //Return canvas element to be rendered
    return <canvas id="Matrix"></canvas>;
};

export default MatrixRain;


