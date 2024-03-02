import Card from "../components/card/Card";

export default function Home() {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-9 gap-6 overflow-auto">
                <div className="col-span-1 lg:col-span-6">
                    <Card
                        header="The Gemini Project" />
                </div>
                <div className="col-span-1 lg:col-span-3">
                        <svg fill="#120012" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="350px" height="350px" viewBox="0 0 448.004 448.004" xmlSpace="preserve" stroke="#8c018c">

                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                            <g id="SVGRepo_iconCarrier"> <g> <path d="M46.139,217.607l-17.93-20.798C18.766,185.932,9.443,175.054,0,164.057l17.212-14.822 c9.323,10.877,18.767,21.755,28.209,32.632l17.93,20.798L46.139,217.607z M145.589,159.157l-24.265-66.34l-21.277,7.77 l24.265,66.34L145.589,159.157z M235.357,76.799h-22.711v70.643h22.711V76.799z M347.955,100.586l-21.275-7.77l-24.266,66.34 l21.277,7.77L347.955,100.586z M448.004,164.057l-17.213-14.822l-46.139,53.55l17.211,14.822L448.004,164.057z M404.852,268.049 l6.455,7.65l-6.455,7.649c-0.717,0.957-18.885,22.353-49.963,43.868c-41.598,28.808-86.779,43.987-130.768,43.987 c-43.988,0-89.29-15.18-130.767-43.987c-31.078-21.516-49.247-43.031-49.964-43.868l-6.455-7.649l6.455-7.65 c0.717-0.956,18.886-22.353,49.964-43.867c41.597-28.808,86.779-43.988,130.767-43.988c43.988,0,89.289,15.181,130.768,43.988 C385.967,245.697,404.016,267.212,404.852,268.049z M286.039,275.7c0-34.306-27.732-62.037-62.038-62.037 c-34.306,0-62.037,27.731-62.037,62.037s27.731,62.036,62.037,62.036C258.307,337.856,286.039,310.005,286.039,275.7z M224.001,294.585c-10.399,0-18.886-8.486-18.886-18.886s8.486-18.886,18.886-18.886v-23.906 c-23.548,0-42.792,19.244-42.792,42.792s19.244,42.792,42.792,42.792c23.547,0,42.792-19.244,42.792-42.792h-23.906 C242.887,286.218,234.4,294.585,224.001,294.585z" stroke-width="2"/> </g> </g>

                        </svg>


                </div>
                <div className="col-span-1 lg:col-span-3">
                    <Card
                        header="Encryption" />

                </div>
                <div className="col-span-1 lg:col-span-3">
                    <Card
                        header="Decryption" />

                </div>
                <div className="col-span-1 lg:col-span-3">
                    <Card
                        header="Understanding" />

                </div>
                <div className="col-span-1 lg:col-span-9">
                    <Card header="Suggestions? Contact Me"
                    />

                </div>
            </div>
        </>
    );
}