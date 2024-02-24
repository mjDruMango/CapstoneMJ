import { Fragment } from "react";

// Headless UI, for more info and examples you can check out https://github.com/tailwindlabs/headlessui
import { Tab } from "@headlessui/react";

export default function TabsDefaultwithIcons() {
  return (
    <>
      {/* Tabs: Default with Icons */}
      <div className="dark:text-gray-100">
        <Tab.Group>
          {/* Nav Tabs */}
          <Tab.List className="flex items-center border-b border-gray-200/75 text-sm dark:border-gray-700">
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`-mb-px flex items-center space-x-2 border-b-2 px-3 py-3 font-medium focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-25 md:px-5 ${
                    selected
                      ? "border-blue-500 text-blue-600 dark:border-blue-500 dark:text-blue-400"
                      : "border-transparent text-gray-600 hover:border-gray-200 hover:text-blue-500 active:text-gray-600 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-blue-400"
                  }`}
                >
                  <svg
                    className="hi-mini hi-home inline-block size-5 sm:opacity-40"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="hidden sm:inline-block">Home</span>
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`-mb-px flex items-center space-x-2 border-b-2 px-3 py-3 font-medium focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-25 md:px-5 ${
                    selected
                      ? "border-blue-500 text-blue-600 dark:border-blue-500 dark:text-blue-400"
                      : "border-transparent text-gray-600 hover:border-gray-200 hover:text-blue-500 active:text-gray-600 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-blue-400"
                  }`}
                >
                  <svg
                    className="hi-mini hi-user-circle inline-block size-5 sm:opacity-40"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="hidden sm:inline-block">Profile</span>
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`-mb-px flex items-center space-x-2 border-b-2 px-3 py-3 font-medium focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-25 md:px-5 ${
                    selected
                      ? "border-blue-500 text-blue-600 dark:border-blue-500 dark:text-blue-400"
                      : "border-transparent text-gray-600 hover:border-gray-200 hover:text-blue-500 active:text-gray-600 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-blue-400"
                  }`}
                >
                  <svg
                    className="hi-mini hi-wrench-screwdriver inline-block size-5 sm:opacity-40"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.5 10a4.5 4.5 0 004.284-5.882c-.105-.324-.51-.391-.752-.15L15.34 6.66a.454.454 0 01-.493.11 3.01 3.01 0 01-1.618-1.616.455.455 0 01.11-.494l2.694-2.692c.24-.241.174-.647-.15-.752a4.5 4.5 0 00-5.873 4.575c.055.873-.128 1.808-.8 2.368l-7.23 6.024a2.724 2.724 0 103.837 3.837l6.024-7.23c.56-.672 1.495-.855 2.368-.8.096.007.193.01.291.01zM5 16a1 1 0 11-2 0 1 1 0 012 0z"
                      clipRule="evenodd"
                    />
                    <path d="M14.5 11.5c.173 0 .345-.007.514-.022l3.754 3.754a2.5 2.5 0 01-3.536 3.536l-4.41-4.41 2.172-2.607c.052-.063.147-.138.342-.196.202-.06.469-.087.777-.067.128.008.257.012.387.012zM6 4.586l2.33 2.33a.452.452 0 01-.08.09L6.8 8.214 4.586 6H3.309a.5.5 0 01-.447-.276l-1.7-3.402a.5.5 0 01.093-.577l.49-.49a.5.5 0 01.577-.094l3.402 1.7A.5.5 0 016 3.31v1.277z" />
                  </svg>
                  <span className="hidden sm:inline-block">Settings</span>
                </button>
              )}
            </Tab>
          </Tab.List>
          {/* END Nav Tabs */}
        </Tab.Group>
      </div>
      {/* END Tabs: Default with Icons */}
    </>
  );
}

