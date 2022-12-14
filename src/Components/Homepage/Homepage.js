import React, { useEffect, useState } from 'react';
import BreakTime from '../BreakTime/BreakTime';
import Content from '../Content/Content';
import Details from '../Details/Details';
import Personal from '../Personal/Personal';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



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

    const notify = () => toast("Yay You Completed the whole Series. Congratulations!!");

    return (
        <div>
            <section className='container text-center'>
                <div className="row p-5">
                    <div className=" col-lg-9 col-md-12">
                        <h4 className='text-start mb-5'>Select the animes you want to watch today.</h4>
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
                    <div className=" col-lg-3 pt-5">

                        <Personal></Personal>
                        <BreakTime
                            addBreakTime={addBreakTime}

                        ></BreakTime>
                        <Details
                            watch={watch}
                            breaks={breaks}
                        ></Details>
                        <div>
                            <button onClick={notify} className='btn btn-primary'>Acitivity Complete</button>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
                <h1 className='p-2'>Questions and Answers</h1>
                <div className="row row-cols-1 row cols-md-2 row-cols-lg-3 g-4 p-2 m-3">

                    <div className="col card">
                        <div className="card-body">
                            <h3 className="card-title">How does react Work?</h3>
                            <p className="card-text text-start">React implements a virtual DOM, which is essentially a JavaScript version of the DOM tree. Therefore, it will utilize a virtual version of the DOM whenever it wants to read from or write to it. The virtual DOM will then look for the most effective approach to update the DOM of the browser. React elements are simple objects that are less expensive to build than DOM elements in browsers. The DOM is updated by React DOM to match the React elements. Because JavaScript is so quick, it makes sense to have a DOM tree in it to facilitate quick manipulation. React was designed to be used in the browser, however Node.js may also be used on the server to use it there.</p>
                        </div>
                    </div>
                    <div className="col card">
                        <div className="card-body">
                            <h3 className="card-title">Difference between Props and State</h3>
                            <p className="card-text">
                                <h2>Props:</h2>
                                <ol className='text-start'>
                                    <li>The Data is passed from one component to another.</li>
                                    <li>It is Immutable (cannot be modified).</li>
                                    <li>Props can be used with state and functional components.</li>
                                    <li>Props are read-only.</li>
                                </ol>
                                <h2>State:</h2>
                                <ol className='text-start'>
                                    <li>The Data is passed within the component only.</li>
                                    <li>It is Mutable ( can be modified).</li>
                                    <li>State can be used only with the state components/class component.</li>
                                    <li>State is both read and write.</li>
                                </ol>
                            </p>
                        </div>
                    </div>
                    <div className="col card">
                        <div className="card-body">
                            <h3 className="card-title">UseEffect Api is used for other purposes than loading data?</h3>
                            <p className="card-text"><h2>The purposes of useEffect:</h2>
                                <ol className='text-start'>
                                    <li>fetch API data</li>
                                    <li>validating input field</li>
                                    <li>live filtering</li>
                                    <li>trigger animation on new array value</li>
                                    <li>update paragraph list on fetched API data update</li>
                                    <li>updating fetched API data to get BTC updated price</li>
                                </ol>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default Homepage;