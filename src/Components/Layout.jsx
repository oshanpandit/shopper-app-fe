import {Outlet} from 'react-router-dom';
import Header from './Header';
import { useEffect} from 'react';

const Layout=()=>{
   return(
    <>
    <Header/>
    <Outlet></Outlet>
    </>
   )
}

export default Layout;