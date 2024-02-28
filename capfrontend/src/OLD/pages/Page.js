import React from 'react';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js';
import BackgroundMatrixRain from '../components/BackgroundMatrixRain.js';

export default function Page(props) {


    return (
        <>
            {/* Page Container */}
            <div
                id="page-container"
                className={`mx-auto flex min-h-dvh w-full min-w-[320px] flex-col bg-transparent dark:text-gray-100 lg:pl-64`}
            >
                <BackgroundMatrixRain />
                <div>
                    {/* <Header text={props.headerTitle} /> */}
                    {props.children}
                </div>
                <Footer />
            </div>
        </>
    );
}