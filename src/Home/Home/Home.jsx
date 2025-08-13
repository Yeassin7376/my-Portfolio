import React from 'react';
import Navbar from '../../Components/NavBar';
import Hero from '../Sections/Hero';
import About from '../Sections/About';
import Footer from '../../Components/Footer';

const Home = () => {
    return (
        <div>
            <header className='sticky top-0 z-50  bg-cyan-950'><Navbar></Navbar></header>
            <main>
                <section>
                    <Hero></Hero>
                </section>
                <section className=''>
                    <About></About>
                </section>
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;