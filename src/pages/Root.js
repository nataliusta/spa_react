import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

const Root = () => {
    return (
        <>
            <h1><MainNavigation /></h1>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Root;