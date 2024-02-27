import React from 'react';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js';
import BackgroundMatrixRain from '../components/BackgroundMatrixRain.js';

export default function Page(props) {


    return (
        <>
            <BackgroundMatrixRain />
            <div>
                <Header text={props.headerTitle} />
                {props.children}
            </div>
            <Footer />
        </>
    );
}