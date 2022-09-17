import React from 'react';

const Projects = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold text-cyan-500 py-7'>Projects</h2>

            <div className='grid lg:grid-cols-3 grid-cols-2 gap-5   container mx-auto'>



                <div className="card w-82 bg-sky-900	p-2 text-white shadow-xl">
                    <figure className="p-1">
                        <img src="https://i.ibb.co/dmgyzDK/banner-img.png" alt="" />
                    </figure>

                    <div className="card-actions p-3">
                        <h2 className="card-title mt-2">Mr Car Fixer</h2>
                        <button className="btn btn-primary"><a href="https://mr-car-fixer.web.app/" target="_blank" rel="noopener noreferrer">Live Demo</a></button>


                    </div>
                </div>
                <div className="card w-82 bg-sky-900	p-2 text-white shadow-xl">
                    <figure className="p-1">
                        <img src="https://amazfit-bicycle-yoko.web.app/static/media/6.b39141d3ab581d526f3a.jpg" alt="" />
                    </figure>

                    <div className="card-actions py-3">
                        <h2 className="card-title mt-2"> Amazfit - a bicycle selling site</h2>
                        <button className="btn btn-primary"><a href="https://amazfit-bicycle-yoko.web.app/home" target="_blank" rel="noopener noreferrer">Live Demo</a></button>


                    </div>
                </div>
                <div className="card w-82 bg-sky-900	p-2 text-white shadow-xl">
                    <figure className="p-1 w-full ">
                        <img className='h-72' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeq5yrDHUL7d8RbLKr7mp_tOMFhUFkwDRjow&usqp=CAU" alt="" />
                    </figure>

                    <div className="card-actions py-3">
                        <h2 className="card-title mt-2">Mr Car Fixer</h2>
                        <button className="btn btn-primary"><a href="https://stirring-faun-f79bc0.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a></button>


                    </div>
                </div>
            </div>


        </div>

    );
};

export default Projects;