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
        className={`fixed bottom-0 left-0 top-0 z-50 flex h-full w-full flex-col bg-main-purple transition-transform duration-500 ease-out lg:w-64 ${desktopSidebarOpen ? "lg:translate-x-0" : "lg:-translate-x-full"
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
              className="hi-mini hi-cube-transparent inline-block size-5 text-white transition group-hover:scale-110 text-white"
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
        className={`flex flex-none items-center h-16 bg-main-purple shadow-sm fixed top-0 right-0 left-0 z-30 lg:pl-64 ${desktopSidebarOpen ? "lg:pl-64" : ""
          }`}
      >
        <div className="flex justify-between max-w-10xl mx-auto px-4 lg:px-8 w-full">
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
          <div class="flex items-center">
            <span
              class="group inline-flex items-center space-x-2 text-lg font-bold text-white">The Gemini Project :3</span>
          </div>

          <div className="flex items-center space-x-2 text-white">
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
                className="text-white hover:text-[#fff] dark:hover:text-gray-50"
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
          </div>
          {/* END Right Section */}
        </div>
      </header>
      {/* END Page Header */}
    </>
  );
}