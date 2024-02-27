import { React } from "react";
import { Fragment, useState } from "react";

import SidebarSection from "./SidebarSection";

export default function Sidebar() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);
  return (
    <>
      {/* Page Sidebar */}
      <nav
        id="page-sidebar"
        aria-label="Main Sidebar Navigation"
        className={`fixed bottom-0 left-0 top-0 z-50 flex h-full w-full flex-col bg-main-purple transition-transform duration-500 ease-out dark:border-gray-800 dark:bg-gray-800 dark:text-gray-200 lg:w-64 ${desktopSidebarOpen ? "lg:translate-x-0" : "lg:-translate-x-full"
          } ${mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Sidebar Header */}
        <div className="flex h-16 w-full flex-none items-center justify-between px-4  lg:justify-center">
          {/* Brand */}

          <a
            href="#"
            className="group inline-flex items-center space-x-2 text-lg font-bold tracking-wide text-gray-900 hover:text-gray-600"
          >
            <svg
              className="hi-mini hi-cube-transparent inline-block size-5 text-purple-600 transition group-hover:scale-110 dark text-white"
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
            <span class="text-white">The Gemini Project</span>
          </a>
          {/* END Brand */}

          {/* Close Sidebar on Mobile */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileSidebarOpen(false)}
              type="button"
              className="inline-flex items-center justify-center space-x-2 rounded-lg border bg-purple-700 px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:shadow-none"
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
                href="/Home"
                className="group flex items-center space-x-2 rounded-lg border border-custom-purple-1 bg-custom-purple-1 px-2.5 text-sm font-medium text-white dark:text-white"
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
              <SidebarSection sectionTitle="Image Steganography" encryptLink="/ImageUpload" decryptLink="/LSBDecrypt" />
              <SidebarSection sectionTitle="Vigenere" encryptLink="/VigEncrypt" decryptLink="/VigDecrypt" />
              <SidebarSection sectionTitle="Caesar" encryptLink="/CaesarEncrypt" decryptLink="/CaesarDecrypt" />
            </nav>
          </div>
        </div>
        {/* END Sidebar Navigation */}
      </nav>

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
          </div>
          {/* END Right Section */}
        </div>
      </header>
      {/* END Page Header */}
    </>
  );
}