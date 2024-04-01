import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const URL = "https://api.themoviedb.org/3/movie";
export const FetchMovieDetail = createAsyncThunk("/FetchMovieDetail", () => {
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => data.results);
});




