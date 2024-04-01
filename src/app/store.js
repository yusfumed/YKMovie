import { configureStore } from "@reduxjs/toolkit";

import MovieReducer from "./features/popular/popularMovieSlice";

import TvReducer from "./features/popular/popularTvSlice";

const store = configureStore({
  reducer: {
    movie: MovieReducer,
    tvSeries:TvReducer,
  },
});

export default store;
