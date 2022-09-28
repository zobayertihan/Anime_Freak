import React from 'react';
import './BreakTime.css'

const BreakTime = () => {
    return (
        <div>
            <h2 className='p-2'>Add a Break</h2>
            <div className="row row-cols-5 bg-light d-flex justify-content-between">
                <button className=' btn btn-light m-1 d-flex justify-content-center align-items-center'>
                    <h5>10</h5>
                </button>
                <button className='btn btn-light m-1 d-flex justify-content-center align-items-center'>
                    <h5>20</h5>
                </button>
                <button className='btn btn-light m-1 d-flex justify-content-center align-items-center'>
                    <h5>30</h5>
                </button>
                <button className='btn btn-light m-1 d-flex justify-content-center align-items-center'>
                    <h5>40</h5>
                </button>
            </div>
        </div>
    );
};

export default BreakTime;