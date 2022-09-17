import React from 'react';
import { DiMagento } from "react-icons/di";
import { ImHome, ImUserTie } from "react-icons/im";
const SharedFooter = () => {
    return (
        <div className=' bg-red-200 fixed  '>
            <div className="flex justify-center ">
                <div>
                <button>
                    <h3><ImHome /></h3>

                </button>
                <button className="active">
                    <h3><DiMagento /></h3>

                </button>
                <button className="active">
                    <h3><DiMagento /></h3>

                </button>
                <button className="active">
                    <h3><DiMagento /></h3>

                </button>
                <button>
                    <h3><ImUserTie /></h3>

                </button>
                </div>
            </div>

        </div>
    );
};

export default SharedFooter;