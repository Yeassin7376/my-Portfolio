import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/NavBar';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div>
            <header className='sticky top-0 z-50  bg-cyan-950'>
                <Navbar/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer className=' bg-neutral '>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;