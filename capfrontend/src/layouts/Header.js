export default function Header({ mobileSidebarOpen, setMobileSidebarOpen, desktopSidebarOpen, setDesktopSidebarOpen }) {
    return (
        <>
            {/* Page Header */}
            <header
                id="page-header"
                className={`fixed left-0 right-0 top-0 z-30 flex h-16 flex-none items-center bg-primary shadow-sm ${desktopSidebarOpen ? "lg:pl-64" : ""
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
                                className="inline-flex items-center justify-center space-x-2 rounded-lg border border-secondary bg-secondary px-3 py-2 text-sm font-semibold leading-5 text-white hover:shadow-sm focus:ring-purple active:shadow-none"
                            >
                                <svg
                                    className="hi-solid hi-menu-alt-1 inline-block size-5"
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

                        {/* Toggle Sidebar on Mobile */}
                        <div className="lg:hidden">
                            <button
                                onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                                type="button"
                                className="inline-flex items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-primary px-3 py-2 text-sm font-semibold leading-5 text-white hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none"
                            >
                                <svg
                                    className="hi-solid hi-menu-alt-1 inline-block size-5"
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
                        {/* END Toggle Sidebar on Mobile */}

                    </div>
                    {/* END Left Section */}

                    {/* Center Section */}
                    <div className="flex items-center">
                        <a
                            href="#"
                            className="group inline-flex items-center space-x-2 text-lg font-bold tracking-wide text-white"
                        >
                            <span className="hidden sm:inline">The Gemini Project</span>
                        </a>
                    </div>
                    {/* END Center Section */}

                    {/* Right Section */}
                    <div className="flex items-center space-x-2">
                        {/* Social Media */}
                        <nav className="space-x-4 lg:w-1/3 lg:text-right flex">
                            <a href="#" className="text-white hover:text-[#1877f2]">
                                <svg
                                    className="icon-facebook inline-block size-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
                                </svg>
                            </a>
                            <a href="#" className="text-white hover:text-[#405de6]">
                                <svg
                                    className="icon-instagram inline-block size-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-[#fff]"
                            >
                                <svg
                                    className="icon-github inline-block size-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </nav>
                        {/* End Social Media */}
                    </div>
                    {/* END Right Section */}
                </div>
            </header>
            {/* END Page Header */}
        </>

    );
};