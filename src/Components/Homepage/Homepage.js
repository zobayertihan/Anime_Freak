import React, { useEffect, useState } from 'react';
import BreakTime from '../BreakTime/BreakTime';
import Content from '../Content/Content';
import Details from '../Details/Details';
import Personal from '../Personal/Personal';



const Homepage = () => {

    const [contents, setContents] = useState([]);
    const [watch, setWatch] = useState([0]);
    const x = localStorage.getItem('breakTime')
    const [breaks, setBreaks] = useState([x]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setContents(data))
    }, [])

    const addToField = (time) => {

        const newWatchTime = parseInt(watch) + time;
        setWatch(newWatchTime)
    }
    const addBreakTime = (value) => {
        // localStorage.getItem("breakTime", value)
        // localStorage.getItem(value)
        const newBreakTime = value;
        setBreaks(newBreakTime)
        localStorage.setItem("breakTime", newBreakTime);
    }

    return (
        <div>
            <section className='container text-center'>
                <div className="row p-5">
                    <div className=" col-9">
                        <h4 className='text-start'>Select the animes you want to watch today.</h4>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            {
                                contents.map(content => <Content
                                    key={content.id}
                                    content={content}
                                    addToField={addToField}
                                ></Content>)
                            }
                        </div>
                    </div>
                    <div className=" col-3 pt-5">

                        <Personal></Personal>
                        <BreakTime
                            addBreakTime={addBreakTime}

                        ></BreakTime>
                        <Details
                            watch={watch}
                            breaks={breaks}
                        ></Details>
                        <button className='btn btn-primary'>Acitivity Complete</button>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default Homepage;