import React from 'react';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js';
import TabsDefaultwithIcons from '../components/TabsWithIcons.js';

const Page = (props) => {
    const { headerTitle, children } = props;

    return (
        <>
            <TabsDefaultwithIcons/>
            <div>
                <Header text={ headerTitle } />
                {children}
            </div>
            <Footer/>
        </>
    );
}

export default Page;