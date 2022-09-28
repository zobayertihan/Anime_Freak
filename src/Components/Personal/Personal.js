import React from 'react';
import img from '.././Images/luffy.jpg';
import './Personal.css'

const Personal = () => {
    return (
        <div >
            <div>
                <img src={img} className='card-img-top rounded-circle w-25' alt="..." />
                <p>Monkey D. Luffy</p>
            </div>
            <div>
                <div className="row row-cols-3 p-2 bg-light">
                    <div>
                        <h2>25</h2>
                        <p>Series</p>
                    </div>
                    <div>
                        <h2>55</h2>
                        <p>Movies</p>
                    </div>
                    <div>
                        <h2>23</h2>
                        <p>Age</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Personal;