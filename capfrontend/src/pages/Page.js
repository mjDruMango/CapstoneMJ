import React from 'react';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js';
import BackgroundMatrixRain from '../components/BackgroundMatrixRain.js';

const Page = (props) => {
    const { headerTitle, children } = props;

    return (
        <>
            <BackgroundMatrixRain />
            <div>
                <Header text={ headerTitle } />
                {children}
            </div>
            <Footer/>
        </>
    );
}

export default Page;