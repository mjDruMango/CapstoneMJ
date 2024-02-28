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
                        <svg
                            className="hi-mini hi-cube-transparent inline-block size-5 text-blue-600 transition group-hover:scale-110"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.638 1.093a.75.75 0 01.724 0l2 1.104a.75.75 0 11-.724 1.313L10 2.607l-1.638.903a.75.75 0 11-.724-1.313l2-1.104zM5.403 4.287a.75.75 0 01-.295 1.019l-.805.444.805.444a.75.75 0 01-.724 1.314L3.5 7.02v.73a.75.75 0 01-1.5 0v-2a.75.75 0 01.388-.657l1.996-1.1a.75.75 0 011.019.294zm9.194 0a.75.75 0 011.02-.295l1.995 1.101A.75.75 0 0118 5.75v2a.75.75 0 01-1.5 0v-.73l-.884.488a.75.75 0 11-.724-1.314l.806-.444-.806-.444a.75.75 0 01-.295-1.02zM7.343 8.284a.75.75 0 011.02-.294L10 8.893l1.638-.903a.75.75 0 11.724 1.313l-1.612.89v1.557a.75.75 0 01-1.5 0v-1.557l-1.612-.89a.75.75 0 01-.295-1.019zM2.75 11.5a.75.75 0 01.75.75v1.557l1.608.887a.75.75 0 01-.724 1.314l-1.996-1.101A.75.75 0 012 14.25v-2a.75.75 0 01.75-.75zm14.5 0a.75.75 0 01.75.75v2a.75.75 0 01-.388.657l-1.996 1.1a.75.75 0 11-.724-1.313l1.608-.887V12.25a.75.75 0 01.75-.75zm-7.25 4a.75.75 0 01.75.75v.73l.888-.49a.75.75 0 01.724 1.313l-2 1.104a.75.75 0 01-.724 0l-2-1.104a.75.75 0 11.724-1.313l.888.49v-.73a.75.75 0 01.75-.75z"
                                clipRule="evenodd"
                            />
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