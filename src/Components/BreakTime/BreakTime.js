import React from 'react';
import './BreakTime.css'

const BreakTime = (props) => {
    const { addBreakTime } = props
    return (
        <div>
            <h2 className='p-2'>Add a Break</h2>
            <div className="row row-cols-5 bg-light d-flex justify-content-between">
                <button onClick={() => addBreakTime(10)} className=' btn btn-light m-1 d-flex justify-content-center align-items-center'>
                    <h5>10</h5>
                </button>
                <button onClick={() => addBreakTime(20)} className='btn btn-light m-1 d-flex justify-content-center align-items-center'>
                    <h5>20</h5>
                </button>
                <button onClick={() => addBreakTime(30)} className='btn btn-light m-1 d-flex justify-content-center align-items-center'>
                    <h5>30</h5>
                </button>
                <button onClick={() => addBreakTime(40)} className='btn btn-light m-1 d-flex justify-content-center align-items-center'>
                    <h5>40</h5>
                </button>
            </div>
        </div>
    );
};

export default BreakTime;