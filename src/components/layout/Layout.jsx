import { Link, Outlet } from 'react-router-dom'
import Nav from '../navigation/Nav'
import Footer from '../footer/Footer'

const Layout = () => {
    return(
        <>
            <Nav/>
            <div className='main'>
                <Outlet />
            </div>
            <Footer/>
        </>
    )
}

export default Layout;