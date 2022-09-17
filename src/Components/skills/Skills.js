import React from 'react';

const Skills = () => {
    return (
        <div >
            <h1 className='text-center text-cyan-500 font-semibold text-3xl py-7'>My Skills </h1>
            <div className="radial-progress p-2 m-3 text-yellow-500" style={{ "--value": 100 }}> HTML 100%</div>
            <div className="radial-progress p-2 m-3 text-indigo-500" style={{ "--value": 99 }}>CSS 99%</div>
            <div className="radial-progress p-2 m-3 text-green-500" style={{ "--value": 100 }}> Tailwind 100%</div>
            <div className="radial-progress p-2 m-3 text-orange-500" style={{ "--value": 96 }}>JavaScript 96%</div>
            <div className="radial-progress p-2 m-3 text-cyan-500" style={{ "--value": 95 }}>React 95%</div>
            <div className="radial-progress p-2 m-3 text-blue-800" style={{ "--value": 86 }}>MongoDb 86%</div>


        </div>
    );
};

export default Skills;