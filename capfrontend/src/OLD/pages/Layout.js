import Sidebar from '../components/Sidebar.js';
import Page from '../pages/Page.js'
import { Outlet } from "react-router-dom";


export default function Layout({ children }) {
    return (
        <>
            <Page>
                <Sidebar />
                <Outlet />
            </Page>
        </>
    );
}
