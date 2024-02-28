import React from "react";

import Footer from "./Footer";


export default function Layout({ children }) {

    return (
        <>
            {/* Page Container */}
            <div
                id="page-container"
                className="mx-auto flex min-h-dvh w-full min-w-[320px] flex-col bg-transparent lg:pl-64">
                hi


                {/* Page Header */}

                {/* End Page Header */}

                {/* Page Content */}

                {/* End Content */}

                {/* Page Footer */}
                <Footer />
                {/* End Page Footer */}

            </div>
            {/* End Page Container */}
        </>
    );

};