import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeMovie } from '../movieSlice';
import './MovieList.css'; // Import the CSS file

export const MovieList = () => {    
    const movies = useSelector((state) => state.movies.movies);
    const dispatch = useDispatch();

    const handleDelete = (index) => {
        dispatch(removeMovie(index));
    };

    return (
        <div className="movie-list">
            <h2>Movie List</h2>
            {movies.map((movie, index) => (
                <div key={index} className="movie-item">
                    <span className="movie-name">{Object.values(movie)[0]}</span>
                    <button 
                        onClick={() => handleDelete(index)} 
                        className="delete-button"
                    >
                        X
                    </button>
                </div>
            ))}
        </div>
    );
};