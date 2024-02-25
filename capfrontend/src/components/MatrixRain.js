import React from 'react';
import '../MatrixRain.css'
import { useEffect, useState } from 'react';

const MatrixRain = () => {
    const [speed, setSpeed] = useState(70);

    useEffect(() => {
        const canvas = document.getElementById('Matrix');
        const context = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
        const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const nums = '0123456789';
        const alphabet = katakana + latin + nums;

        const fontSize = 16;
        const columns = Math.floor(canvas.width / fontSize);
        const rainDrops = Array.from({ length: columns }, () => Math.floor(Math.random() * canvas.height / fontSize));

        const draw = () => {
            context.fillStyle = 'rgba(0, 0, 0, 0.05)';
            context.fillRect(0, 0, canvas.width, canvas.height);
            context.fillStyle = '#630163';
            context.font = fontSize + 'px arial';

            for (let i = 0; i < rainDrops.length; i++) {
                const text = alphabet[Math.floor(Math.random() * alphabet.length)];
                context.fillText(text, i * fontSize, rainDrops[i] * fontSize);
                if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    rainDrops[i] = -fontSize;
                }
                rainDrops[i]++;
            }
        };

        const updateCanvas = () => {
            draw();
            setTimeout(updateCanvas, speed);
        };

        updateCanvas();

        return () => {
            clearTimeout(updateCanvas);
        };
    }, []);

    return <canvas id="Matrix"></canvas>;
};

export default MatrixRain;


