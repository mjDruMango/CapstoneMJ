import Sidebar from '../components/Sidebar.js';
import Page from '../pages/Page.js'
import PageWithSideContent from './PageWithSideContent.js';

function Index() {
    return (
        <>
            <Page>
                <Sidebar />
            </Page>
        </>
    );
}

export default Index;