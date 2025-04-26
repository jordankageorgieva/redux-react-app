import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    movies: [{ 1: "Movie 1" }, { 2: "Movie 2" }, { 3: "Movie 3" }],
    selectedMovie: null,
    loading: false,
    error: null,
};

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        addMovie(state, action) {
            const newMovie = { [state.movies.length + 1]: action.payload.movie };
            state.movies.push(newMovie);
        },
        removeMovie: (state, action) => {
            state.movies.splice(action.payload, 1); // Remove movie by index
        },
        
    },
});

export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;