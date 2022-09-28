import React from 'react';

const Details = () => {
    return (
        <div className='p-5'>
            <h4 className='p-2'>Watch Details</h4>
            <input className='p-2 m-2 form-control' type="text" placeholder='Total Watch Time' />
            <input className='p-2 m-2 form-control' type="text" placeholder='Break Time' />
        </div>
    );
};

export default Details;