import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import Footer from '../Shared/Footer';
import SharedFooter from '../Shared/SharedFooter';
import Skills from '../skills/Skills';
import Navbar from './../Header/Navbar';
import Header from './Header';

const Home = () => {
    return (
        <div className=' 	'>
            <Navbar></Navbar>

            <Header></Header>

            <AboutMe></AboutMe>

            <Skills></Skills>
            <Projects></Projects>
            <Footer></Footer>
        </div>
    );
};

export default Home;