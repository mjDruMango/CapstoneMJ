import React from 'react';
import Navbar from '../components/Navbar.js';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js';

const Page = (props) => {
    const { headerTitle, children } = props;

    return (
        <>
            <Navbar/>
            <div>
                <Header text={ headerTitle } />
                {children}
            </div>
            <Footer/>
        </>
    );
}

export default Page;