export default function Footer() {
    return (
        <>

            <footer
                id="page-footer"
                className="flex flex-none items-center bg-primary text-white"
            >
                <div className="mx-auto flex w-full max-w-10xl flex-col px-4 text-center text-sm md:flex-row md:justify-between md:text-left lg:px-8">
                    <div className="pb-1 pt-4 md:pb-4">
                        <a
                            href="#"
                            target="_blank"
                            className="font-medium hover:text-blue-400"
                        >
                            The Gemini Project
                        </a>{" "}
                        ©2023 - {(new Date().getFullYear())}
                    </div>
                    <div className="inline-flex items-center justify-center pb-4 pt-1 md:pt-4">
                        <span>Crafted with</span>
                        <svg
                            className="hi-solid hi-heart mx-1 inline-block size-4 text-red-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span>
                            by{" "}
                            <a
                                href="#"
                                target="_blank"
                                className="font-medium hover:text-blue-400"
                            >
                                MJ Drumheller
                            </a>
                        </span>

                    </div>
                </div>
            </footer>

        </>
    );
}