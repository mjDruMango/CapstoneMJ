import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon component
import { faEye, faEyeSlash, faFileCode, faFile, faEnvelope, faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons"; // Import specific icons you need


const navigation = [
    {
        categoryName: "Image Steganography",
        prepend: "/image-steganography/",
        pages: [
            {
                pageName: "Encrypt",
                pageLink: "encrypt",
                iconName: faEyeSlash
            },
            {
                pageName: "Decrypt",
                pageLink: "decrypt",
                iconName: faEye
            }
        ]
    },
    {
        categoryName: "Vigenere",
        prepend: "/vigenere/",
        pages: [
            {
                pageName: "Encrypt",
                pageLink: "encrypt",
                iconName: faFileCode
            },
            {
                pageName: "Decrypt",
                pageLink: "decrypt",
                iconName: faFile
            }
        ]
    },
    {
        categoryName: "Caesar Shift",
        prepend: "/caesar-shift/",
        pages: [
            {
                pageName: "Encrypt",
                pageLink: "encrypt",
                iconName: faEnvelope
            },
            {
                pageName: "Decrypt",
                pageLink: "decrypt",
                iconName: faEnvelopeOpen
            }
        ]
    }

];

export default function Sidebar({ mobileSidebarOpen, setMobileSidebarOpen, desktopSidebarOpen }) {
    return (
        <>
            <nav
                id="page-sidebar"
                aria-label="Main Sidebar Navigation"
                className={`fixed bottom-0 left-0 top-0 z-50 flex h-full w-full flex-col bg-primary text-white transition-transform duration-500 ease-out lg:w-64 ${desktopSidebarOpen ? "lg:translate-x-0" : "lg:-translate-x-full"
                    } ${mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                {/* Sidebar Header */}
                <div className="flex h-16 w-full flex-none items-center justify-between px-4 lg:justify-center">
                    {/* Brand */}
                    <a
                        href="#"
                        className="group inline-flex items-center space-x-2 text-lg font-bold tracking-wide text-white"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 20 20" fill="none">
                            <path fill="#fff" fill-rule="evenodd" d="M3.415 10.242c-.067-.086-.13-.167-.186-.242a16.806 16.806 0 011.803-2.025C6.429 6.648 8.187 5.5 10 5.5c1.813 0 3.57 1.148 4.968 2.475A16.816 16.816 0 0116.771 10a16.9 16.9 0 01-1.803 2.025C13.57 13.352 11.813 14.5 10 14.5c-1.813 0-3.57-1.148-4.968-2.475a16.799 16.799 0 01-1.617-1.783zm15.423-.788L18 10l.838.546-.002.003-.003.004-.01.016-.037.054a17.123 17.123 0 01-.628.854 19.25 19.25 0 01-1.094 1.275L18.3 14.4a1 1 0 01-1.6 1.2l-1.097-1.462c-1.23 1.027-2.81 2.007-4.603 2.284V18a1 1 0 11-2 0v-1.578c-1.793-.277-3.374-1.257-4.603-2.284L3.3 15.6a1 1 0 11-1.6-1.2l1.236-1.648a19.262 19.262 0 01-1.59-1.938 11.109 11.109 0 01-.169-.245l-.01-.016-.003-.004-.001-.002c0-.001-.001-.001.837-.547l-.838-.546.002-.003.003-.004.01-.016a6.84 6.84 0 01.17-.245 18.804 18.804 0 012.308-2.66C5.151 5.1 7.394 3.499 10 3.499s4.848 1.602 6.346 3.025a18.803 18.803 0 012.44 2.852l.037.054.01.016.003.004.001.002zM18 10l.838-.546.355.546-.355.546L18 10zM1.162 9.454L2 10l-.838.546L.807 10l.355-.546z" />
                        </svg>
                        <span>The Gemini Project</span>
                    </a>
                    {/* END Brand */}

                    {/* Close Sidebar on Mobile */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setMobileSidebarOpen(false)}
                            type="button"
                            className="inline-flex items-center justify-center space-x-2 rounded-lg bg-primary text-white px-3 py-2 text-sm font-semibold leading-5 hover:shadow-sm"
                        >
                            <svg
                                className="hi-mini hi-x-mark -mx-0.5 inline-block size-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                            </svg>
                        </button>
                    </div>
                    {/* END Close Sidebar on Mobile */}
                </div>
                {/* END Sidebar Header */}

                {/* Sidebar Navigation */}
                <div className="overflow-y-auto">
                    <div className="w-full p-4">
                        <nav className="space-y-1">
                            <a
                                href="/"
                                className="group flex items-center space-x-2 rounded-lg px-2.5 text-sm font-medium text-white"
                            >
                                <span className="flex flex-none items-center text-white">
                                    <svg
                                        className="hi-outline hi-home inline-block size-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                        />
                                    </svg>
                                </span>
                                <span className="grow py-2 text-white">Home</span>
                            </a>

                            {navigation.map((category) => (
                                <React.Fragment key={category.categoryName}>
                                    <div className="px-3 pb-2 pt-5 text-xs font-semibold uppercase tracking-wider text-white">
                                        {category.categoryName}
                                    </div>

                                    {category.pages.map((page) => (
                                        <NavLink
                                            key={`${category.categoryName}-${page.pageLink}-${page.pageName}`} // Ensures uniqueness
                                            to={`${category.prepend}${page.pageLink}`}
                                            className={({ isActive }) =>
                                                isActive ? "group flex items-center space-x-2 rounded-lg border border-transparent px-2.5 text-sm bg-secondary hover:text-white" : "focus:outline-none group flex items-center space-x-2 rounded-lg border border-transparent px-2.5 text-sm hover:bg-secondary hover:text-white"
                                            }
                                        >
                                            <span className="flex flex-none items-center text-white">
                                                <FontAwesomeIcon icon={page.iconName} className="h-4" />
                                            </span>
                                            <span className="grow py-2">{page.pageName}</span>
                                        </NavLink>
                                    ))}
                                </React.Fragment>


                            ))}

                        </nav>
                    </div>
                </div >
                {/* END Sidebar Navigation */}
            </nav>
        </>
    );
}