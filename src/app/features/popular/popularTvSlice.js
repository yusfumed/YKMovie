import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  tvSeries: {},
  error: "",
};

const URL =
  "https://api.themoviedb.org/3/tv/popular?api_key=5af2eab0e796dc9f0c4e86dff4bbc58f&language=en-US&page=1";

export const fetchTvSeries = createAsyncThunk("/popularTvSlice", async (page) => {
  const response = await fetch(URL + "&page=" + page);
  const data = await response.json();
  return data;
});

const popularTvSeriesSlice = createSlice({
  name: "tvSeries",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTvSeries.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchTvSeries.fulfilled, (state, action) => {
      state.loading = false;
      state.tvSeries = action.payload;
      state.error = "";
    });

    builder.addCase(fetchTvSeries.rejected, (state, action) => {
      state.loading = false;
      state.tvSeries = {};
      state.error = action.error.message;
    });
  },
});

export default popularTvSeriesSlice.reducer;
