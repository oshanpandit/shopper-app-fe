import {Outlet} from 'react-router-dom';
import Header from './Header';
import { useEffect} from 'react';
import { AuthProvider } from '../Context/authContext.jsx';
const Layout=()=>{
   return(
    <>
    <AuthProvider>
    <Header/>
    <Outlet></Outlet>
    </AuthProvider>
    </>
   )
}

export default Layout;