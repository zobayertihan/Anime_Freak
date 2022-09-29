import './App.css';
import React from 'react';
import Homepage from './Components/Homepage/Homepage';
import Header from './Components/Header/Header';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Homepage></Homepage>
    </div>
  );
}

export default App;
