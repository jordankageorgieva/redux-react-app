import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../movieSlice";
import "./MovieInput.css"; // Import the CSS file

export default function MovieInput() {
    const [movie, setMovie] = useState("");
    const dispatch = useDispatch();

    const handleAddMovie = () => {
        if (movie) {
            dispatch(addMovie({ movie }));
            setMovie("");
        }
    };

    return (
        <div className="movie-input-container">
            <input
                type="text"
                value={movie}
                onChange={(e) => setMovie(e.target.value)}
                placeholder="Enter movie name"
            />
            <button onClick={handleAddMovie}>Add Movie</button>
        </div>
    );
}