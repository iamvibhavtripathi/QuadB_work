import React from 'react';
import { Link } from 'react-router-dom';
import bac from '../../assets/movie-theater-g53e18c9d5_1280.jpg';
const back= {
  backgroundColor:`blue`, 
  backgroundImage:`url(${bac})`,
  height: `100vh`,
  backgroundSize: `cover`,
  backgroundRepeat: `no-repeat`


}
const tred= {
  color:`white`         
}

const HomePage = () => {
  return (
    <div style={back  } className="container d-flex justify-content-center align-items-center" >
      <div className="text-center">
        <h1 style={tred} className="mb-4">Movie Status:</h1>
        <div className="mb-4">
          <Link to="/running" className="btn btn-primary btn-lg">Running</Link>
        </div>
        <div>
          <Link to="/ended" className="btn btn-primary btn-lg">Ended</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
