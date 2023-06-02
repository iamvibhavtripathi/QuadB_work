import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h2>Movie List</h2>
      <div className="row">
        {movies.map((item) => (
          <div key={item.show.id} className="col-lg-4 mb-4">
            <div className="card">
              <img src={item.show.image.medium} alt={item.show.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{item.show.name}</h5>
                <Link to={`/movie/${item.show.id}`} className="btn btn-primary">View Summary</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
