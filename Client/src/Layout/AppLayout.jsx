import React from 'react'
import { NavLink, Outlet } from 'react-router'

function AppLayout() {
    const [isAppReady, UpdateAppStatus] = React.useState(false)
    setTimeout(() => {
        UpdateAppStatus(true)
    }, 9 * 1000
    );
    

    if (!isAppReady) {
        return (<div>
            Page is Loading with full speed high
        </div>)
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
            <footer>footer</footer>
        </div>
    )
}

export default AppLayout
