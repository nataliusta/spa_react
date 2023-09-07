import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <>
            <h1>Layout</h1>
            <Outlet />
        </>
    )
}

export default Root;