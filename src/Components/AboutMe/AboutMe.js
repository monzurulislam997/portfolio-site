import React from 'react';
import profile from '../../images/me.png'
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { AiOutlineMore } from 'react-icons/ai';
import { FcBusinessman } from 'react-icons/fc';
import { FcFolder } from 'react-icons/fc';
import { DiReact } from 'react-icons/di';

import { GoMarkGithub } from 'react-icons/go';
import { Link } from 'react-router-dom';
const AboutMe = () => {
    return (
        <div id='#home#about-me' className=' text-white mt-5  '>
            <h1 className='text-3xl font-semibold text-cyan-500'>About Me</h1>
            <div className='w-screen  lg:grid grid-cols-2 '>

                <div className='flex ml-20'>

                    <div className=' lg:flex  gap-y-4 lg:flex-col flex-row  text-2xl   text-white pt-48  '>

                        <a href='https://www.linkedin.com/in/monzurul015/' target="_blank" > <FaLinkedin /> </a>

                        <a href='https://www.linkedin.com/in/monzurul015/' target="_blank" > <GoMarkGithub /> </a>
                        <a href='https://www.linkedin.com/in/monzurul015/' target="_blank" > <FaFacebook /> </a>
                        <p target="_blank" > <AiOutlineMore /> </p>
                    </div>

                    <div className='ml-10 p-8'>
                        <img src={profile} width="350px" alt="" />
                    </div>
                </div>
                <div>
                    <div className=' pt-24 p-3 pr-8 gap-3 grid grid-cols-3'>
                        <div className="card h-28 bg-blue-900 font-semibold py-2  ">


                            <p className='text-4xl text-center ml-20 '>< FcBusinessman /></p>
                            <h2>Experience</h2>
                            <p className='text-gray-400'>One year</p>


                        </div>
                        <div className="card h-28 bg-blue-900 font-semibold py-2 ">

                            <p className='text-4xl text-center ml-20 '>< FcFolder /></p>
                            <h2>Projects</h2>
                            <p className='text-gray-400'>15+ </p>

                        </div>
                        <div className="card h-28 bg-blue-900 font-semibold py-2 ">

                            <p className='text-4xl text-center ml-20 '>< DiReact /></p>
                            <h2>Interested</h2>
                            <p className='text-gray-400'>New Technology</p>

                        </div>
                    </div>
                    <div className='m-2'>
                        <p className='pr-5 font-semibold text-gray-400'>  Hi, This is Monzurul Islam.I'm passionate About Front-End Web Development. I know how important user interface design is in the field of website development.I have been working successfully in the react development   sector from the last years.   I am interested in learning new technology. I want to join a Professional life to gain exposure, confidence & a sense ofachievement. I believe in success through hard work & dedication. </p>
                    </div>
                </div>
            </div>


        </div>


    );
};

export default AboutMe;