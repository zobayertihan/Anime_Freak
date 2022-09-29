import React from 'react';
import img from '.././Images/edted-152.jpg';
import './Personal.css'

const Personal = () => {
    return (
        <div >
            <div>
                <img src={img} className='card-img-top rounded-circle w-25' alt="..." />
                <p>Tihan Zobayer</p>
            </div>
            <h2>Watched</h2>
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
                        <p>Short-Film</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Personal;