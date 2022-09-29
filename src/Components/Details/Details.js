import React from 'react';

const Details = (props) => {
    const { watch, breaks } = props
    return (
        <div className='p-5'>
            <h4 className='p-2'>Watch Details</h4>
            <div className='d-flex justify-content-between'>
                <h6>Total Watch Time: {watch}m</h6>
            </div>
            <div className='d-flex justify-content-between'>
                <h6>Break Time: {breaks}m</h6>
            </div>
        </div>
    );
};

export default Details;