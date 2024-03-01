import React from "react";
import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";


// Headless UI, for more info and examples you can check out https://github.com/tailwindlabs/headlessui
import { Menu, Transition } from "@headlessui/react";


import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import BackgroundMatrixRain from "./BackgroundMatrixRain";


export default function Layout({ children }) {
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
    const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);


    return (
        <>
            {/* Page Container */}
            <div
                id="page-container"
                className={`mx-auto flex min-h-dvh w-full min-w-[320px] flex-col bg-transparent ${desktopSidebarOpen ? "lg:pl-64" : ""
                    }`}
            >

                {/* Page Sidebar */}
                <Sidebar
                    mobileSidebarOpen={mobileSidebarOpen}
                    setMobileSidebarOpen={setMobileSidebarOpen}
                    desktopSidebarOpen={desktopSidebarOpen}
                    setDesktopSidebarOpen={setDesktopSidebarOpen}
                />
                {/* End Page Sidebar */}

                {/* Page Header */}
                <Header
                    mobileSidebarOpen={mobileSidebarOpen}
                    setMobileSidebarOpen={setMobileSidebarOpen}
                    desktopSidebarOpen={desktopSidebarOpen}
                    setDesktopSidebarOpen={setDesktopSidebarOpen}

                />
                {/* End Page Header */}

                {/* Page Content */}
                <main
                    id="page-content"
                    className="flex max-w-full flex-auto flex-col pt-16"
                >

                    {/* Page Section */}
                    <div className="mx-auto w-full max-w-10xl p-4 lg:p-8">

                        <Outlet />

                    </div>
                    {/* END Page Section */}
                    <BackgroundMatrixRain style="z-index: -1000" />
                </main>

                {/* End Content */}

                {/* Page Footer */}
                <Footer />
                {/* End Page Footer */}

            </div>
            {/* End Page Container */}
        </>
    );

};