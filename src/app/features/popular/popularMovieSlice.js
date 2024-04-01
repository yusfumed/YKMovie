import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// initialState

const initialState = {
  loading: false,
  movies: [],
  error: "",
};

const URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=5af2eab0e796dc9f0c4e86dff4bbc58f&language=en-US";

export const fetchMovie = createAsyncThunk("/popularMovieSlice", async (page) => {
  const response = await fetch(URL + "&page=" + page);
  const data = await response.json();
  return data;
});

const popularMovieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovie.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchMovie.fulfilled, (state, action) => {
      state.loading = false;
      state.movies = action.payload;
      state.error = "";
    });
    builder.addCase(fetchMovie.rejected, (state, action) => {
      state.loading = false;
      state.movies = [];
      state.error = action.error.message;
    });
  },
});

export default popularMovieSlice.reducer;
