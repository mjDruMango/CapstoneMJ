import React from "react";

const buttonStyle = {
    grey: "border-gray-200 bg-gray-600 text-gray-800 hover:border-gray-300 hover:text-gray-900 focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:active:border-gray-700",
    slate:
        "border-slate-200 bg-slate-600 hover:border-slate-300 hover:text-slate-900 focus:ring-slate-300 focus:ring-opacity-25 active:border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-slate-200 dark:focus:ring-slate-600 dark:active:border-slate-700",
    white:
        "border border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700",
    red: "border-red-600 bg-red-600 disabled:bg-red-600 disabled:border-red-600 hover:border-red-800 hover:bg-red-800 focus:ring-red-500 active:border-red-600 active:bg-red-600 text-white hover:text-white",
    blue: "border-blue-600 bg-blue-600 disabled:bg-blue-600 disabled:border-blue-600 hover:border-blue-800 hover:bg-blue-800 focus:ring-blue-500 active:border-blue-600 active:bg-blue-600 text-white hover:text-white",
    green:
        "border-green-600 bg-green-600 disabled:bg-green-600 disabled:border-green-600 hover:border-green-800 hover:bg-green-800 focus:ring-green-500 active:border-green-600 active:bg-green-600 text-white hover:text-white",
    primary:
        "border-primary bg-primary disabled:bg-primary disabled:border-primary hover:border-primary hover:bg-primary focus:ring-primary active:border-primary active:bg-primary text-white hover:text-white",

};


export default function Button(props) {
    const variant = props.variant || "primary";
    const selectedStyle =
        "group inline-flex items-center justify-center space-x-2 rounded-md px-5 py-3 text-sm font-semibold leading-5 transition focus:outline-none disabled:opacity-40" +
        buttonStyle[variant] + props.customClass;

    return (
        <button type={props.type} onClick={props.onClick} className={selectedStyle}>
            {props.children}
        </button>
    );

} 