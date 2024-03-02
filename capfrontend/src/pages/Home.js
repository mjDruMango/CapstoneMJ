import Card from "../components/card/Card";
import '../index.css';

export default function Home() {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-9 gap-6 overflow-auto">
                <div className="col-span-1 lg:col-span-6">
                    <Card className="bg-opacity-50">
                        <p className="font-bold text-7xl font-custom tracking-widest text-textcolor">WELCOME</p>
                        <br />
                        <br />
                        <p className="text-gray-300 leading-9 font-mono">Hi everyone!
                            <br />
                            I'm MJ Drumheller, a third-year Information Systems student with a deep fascination for cryptography. This website serves a dual purpose: it's both my capstone project and a personal passion project I've been eager to create for quite some time.
                            <br />
                            I have always been fascinated by cryptography. I envisioned this platform as the perfect springboard to not only acquire new skills but also showcase my existing knowledge of cryptography and show other people a few of the different types of cryptography and how they work.
                            <br />
                            This website is more than just an academic requirement; it's the culmination of my personal intrigue and a testament to the power of infusing passion into academic pursuits.</p>
                    </Card>
                </div>
                <div className="col-span-1 lg:col-span-3">
                    <svg fill="#120012" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="350px" height="350px" viewBox="0 0 448.004 448.004" xmlSpace="preserve" stroke="#8c018c">

                        <g id="SVGRepo_bgCarrier" stroke-width="0" />

                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                        <g id="SVGRepo_iconCarrier"> <g> <path d="M46.139,217.607l-17.93-20.798C18.766,185.932,9.443,175.054,0,164.057l17.212-14.822 c9.323,10.877,18.767,21.755,28.209,32.632l17.93,20.798L46.139,217.607z M145.589,159.157l-24.265-66.34l-21.277,7.77 l24.265,66.34L145.589,159.157z M235.357,76.799h-22.711v70.643h22.711V76.799z M347.955,100.586l-21.275-7.77l-24.266,66.34 l21.277,7.77L347.955,100.586z M448.004,164.057l-17.213-14.822l-46.139,53.55l17.211,14.822L448.004,164.057z M404.852,268.049 l6.455,7.65l-6.455,7.649c-0.717,0.957-18.885,22.353-49.963,43.868c-41.598,28.808-86.779,43.987-130.768,43.987 c-43.988,0-89.29-15.18-130.767-43.987c-31.078-21.516-49.247-43.031-49.964-43.868l-6.455-7.649l6.455-7.65 c0.717-0.956,18.886-22.353,49.964-43.867c41.597-28.808,86.779-43.988,130.767-43.988c43.988,0,89.289,15.181,130.768,43.988 C385.967,245.697,404.016,267.212,404.852,268.049z M286.039,275.7c0-34.306-27.732-62.037-62.038-62.037 c-34.306,0-62.037,27.731-62.037,62.037s27.731,62.036,62.037,62.036C258.307,337.856,286.039,310.005,286.039,275.7z M224.001,294.585c-10.399,0-18.886-8.486-18.886-18.886s8.486-18.886,18.886-18.886v-23.906 c-23.548,0-42.792,19.244-42.792,42.792s19.244,42.792,42.792,42.792c23.547,0,42.792-19.244,42.792-42.792h-23.906 C242.887,286.218,234.4,294.585,224.001,294.585z" stroke-width="2" /> </g> </g>

                    </svg>
                </div>
                <div className="col-span-1 lg:col-span-9 text-center font-bold text-7xl font-custom tracking-widest text-textcolor">
                    WEBSITE GOALS
                </div>
                <div className="col-span-1 lg:col-span-3">
                    <Card
                        className="text-center font-mono"
                        header="ENCRYPTION">
                        <div className="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#8c018c" width="175px" height="175px" viewBox="0 0 22 22" id="memory-lock">
                                <path d="M10 12H12V13H13V15H12V16H10V15H9V13H10V12M8 2H14V3H15V4H16V8H17V9H18V19H17V20H5V19H4V9H5V8H6V4H7V3H8V2M9 4V5H8V8H14V5H13V4H9M16 10H6V18H16V10Z" />
                            </svg>
                        </div>
                        <div className="italic font-mono">
                            Give Consumers a Better Understanding of Encryption Methods
                        </div>
                    </Card>
                </div>
                <div className="col-span-1 lg:col-span-3">
                    <Card
                        className="text-center font-mono"
                        header="DECRYPTION">
                        <div className="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#8c018c" width="175px" height="175px" viewBox="0 0 22 22" id="memory-lock-open">
                                <path d="M10 13H12V14H13V16H12V17H10V16H9V14H10V13M14 2V3H15V4H16V9H17V10H18V20H17V21H5V20H4V10H5V9H14V5H13V4H9V5H8V7H6V4H7V3H8V2H14M16 11H6V19H16V11Z" />
                            </svg>
                        </div>
                        <div className="italic font-mono">
                            Give Consumers a Better Understanding of Decryption Methods
                        </div>
                    </Card>
                </div>
                <div className="col-span-1 lg:col-span-3">
                    <Card
                        className="text-center font-mono"
                        header="UNDERSTANDING">
                        <div className="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="175px" height="175px" viewBox="0 0 32 32" id="key_Light" data-name="key/Light">
                                <path id="Path" d="M0,0H8V2H6v8H8v2h4V32H0Z" fill="#000" />
                                <path id="Path-2" data-name="Path" d="M2,0H14V2h2v8H14v2H10V22h4v4H10v2h4v4H6V12H2V10H0V2H2Z" transform="translate(6)" fill="#8c018c" />
                                <path id="Path-3" data-name="Path" d="M4,0H16V32H4V28H0V26H4V22H0V12H4V10H6V2H4Z" transform="translate(16)" fill="#000" />
                                <path id="Path-4" data-name="Path" d="M0,0H8V4H0Z" transform="translate(10 4)" fill="#000" />
                            </svg>
                        </div>
                        <div className="italic font-mono">
                            Give Consumers a Better Understanding of Different Cryptography Methods
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}