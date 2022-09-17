import React from 'react';
import Typewriter from 'typewriter-effect';

const Header = () => {



    return (
        <div className='text-white p-16'>
            <h3>Hello, i'm </h3>
            <div className=' text-4xl  font-semibold  pb-5'>
                <Typewriter
                    options={{
                        strings: ['Monzurul Islam', 'Front-end Web Developer'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>


            <h4 className='pb-3 '>Front-end Developer</h4>
            <button className='btn  mt-10 mr-5	border-2 sbg-violet-900	 border-cyan-400'>

                <a href="https://drive.google.com/file/d/1T60m0RE3v4GcOozxj-MQgevAt327YZPT/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download Cv</a>
            </button>
            <button className='btn  p-4 px-6 bg-cyan-500'>

                Projects
            </button>


        </div>
    );
};

export default Header;