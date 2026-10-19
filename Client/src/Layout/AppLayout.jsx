import React from 'react'
import { NavLink, Outlet } from 'react-router'

function AppLayout() {
    const [isAppReady, updateAppStatus] = React.useState(false)
    setTimeout(() => {
        updateAppStatus(true)
    }, 2 * 1000);
    

    if (!isAppReady) {
        return (<div>
            Page is Loading....
        </div>);
    }

    return (
        <div>
            <header>Header</header>
            <nav>
                <ul>
                    <li><NavLink to={"/"}>Dashboard </NavLink></li>
                    <li><NavLink to={"/student"}> Student </NavLink>  </li>
                    <li><NavLink to={"/teacher"}> teacher </NavLink></li>
                    <li><NavLink to={"/staff"}> staff </NavLink></li>
                </ul>
            </nav>
            <main>
                <Outlet />
            </main>
            <footer>Footer</footer>
        </div>
    )
}

export default AppLayout