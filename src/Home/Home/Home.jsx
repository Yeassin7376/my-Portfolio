import React from 'react';
import Navbar from '../../Components/NavBar';
import Hero from '../Sections/Hero';
import About from '../Sections/About';
import Footer from '../../Components/Footer';
import Skills from '../Sections/Skills';

const Home = () => {
    return (
        <div>
            <header className='sticky top-0 z-50  bg-cyan-950'><Navbar></Navbar></header>
            <main>
                <section >
                    <Hero></Hero>
                </section>
                <section className=''>
                    <About></About>
                </section>
                <section>
                    <Skills></Skills>
                </section>
            </main>

            <footer className=' bg-neutral '>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;