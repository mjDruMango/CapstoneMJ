import Sidebar from '../components/Sidebar.js';
import Topbar from '../components/Topbar.js';
import Page from '../pages/Page.js'
import PageWithSideContent from './PageWithSideContent.js';

export default function Index(props) {
    return (
        <>
            {/* Page Content */}
            <main
                id="page-content"
                className="flex max-w-full flex-auto flex-col pt-16 lg:flex-row-reverse"
            >
                {/* Page Section */}
                <div className="mx-auto flex w-full max-w-10xl flex-grow flex-col p-4 lg:p-8">
                    {/*

            ADD YOUR MAIN CONTENT BELOW

            */}

                    {/* Placeholder */}
                    <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 py-64 text-gray-400 dark:border-gray-700 dark:bg-gray-800">
                        Main Content
                    </div>

                    {/*

            ADD YOUR MAIN CONTENT ABOVE
                
            */}
                </div>
                {/* END Page Section */}
            </main>
            {/* END Page Content */}
        </>
    );
}
