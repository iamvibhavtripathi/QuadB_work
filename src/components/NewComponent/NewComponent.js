
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

const MyComponent = ({ status }) => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        setApiData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const runningShows = apiData.filter((item) => item.show.status === status);

  return (
    <div style={{ backgroundColor: "#858585" }}>
      <div className="container-xl">
        <div className="row">
          {runningShows.map((item) => (
            <div key={item.show.id} className="col-lg-6">
              <div style={{ backgroundColor: "#E8E8E8" }} className="card mb-4">
                <img src={item.show.image.medium} alt={item.show.name} className="card-img-top" />
                <div className="card-body">
                  <h2 className="card-title text-center h1" style={{ fontFamily: "fantasy", fontSize: "50px" }}>{item.show.name}</h2>
                  <p className="card-text">{ReactHtmlParser(item.show.summary)}</p>
                  <ul className="list-group list-group-horizontal">
                    <li className="list-group-item">Genre: {item.show.genres.join(', ')}</li>
                    <li className="list-group-item">Language: {item.show.language}</li>
                    <li className="list-group-item">Average Rating: {item.show.rating.average}</li>
                  </ul>
                  <div className="text-center">
                    <a href={item.show.url} className="btn btn-primary mt-3 mx-auto" target="_blank" rel="noopener noreferrer">
                      View More
                    </a>
                    <Link to={`/booking/${item.show.id}`} className="btn btn-primary mt-3 mx-auto">
                      Book Movie
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
