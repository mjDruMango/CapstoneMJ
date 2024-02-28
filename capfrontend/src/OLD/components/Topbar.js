import { React } from "react";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";


export default function Topbar(props) {
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
    const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);
    return (
        <>
            {/* Page Header */}
            <header
                id="page-header"
                className={`fixed left-0 right-0 top-0 z-30 flex h-16 flex-none items-center bg-main-purple shadow-sm dark:bg-gray-800 ${desktopSidebarOpen ? "lg:pl-64" : ""
                    }`}
            >
                <div className="mx-auto flex w-full max-w-10xl justify-between px-4 lg:px-8">
                    {/* Left Section */}
                    <div className="flex items-center space-x-2">
                        {/* Toggle Sidebar on Desktop */}
                        <div className="hidden lg:block">
                            <button
                                onClick={() => setDesktopSidebarOpen(!desktopSidebarOpen)}
                                type="button"
                                className="inline-flex items-center justify-center space-x-2 rounded-lg border border-custom-purple-1 bg-custom-purple-1 px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none"
                            >
                                <svg
                                    className="hi-solid hi-menu-alt-1 inline-block size-5 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                        {/* END Toggle Sidebar on Desktop */}
                        <div className="text-white">
                            kys
                        </div>
                    </div>
                    {/* END Right Section */}
                </div>
            </header>
            {/* END Page Header */}

        </>
    )
}