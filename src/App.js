import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// import pages
import TvShows from "./pages/TvShows";
import TopIMDB from "./pages/TopIMDB";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

// import components
import MovieDetail from "./components/Movie/MovieDetail";
import { MovieDetailLoader } from "./components/Movie/MovieDetailLoader";

import TvDetail from "./components/TV/TvDetail.jsx"; 
import { TvDetailLoader } from "./components/TV/TvDetailLoader";

// Layouts
import RootLayout from "./layouts/RootLayout";

// Material UI

import { createTheme, ThemeProvider, colors } from "@mui/material";

const theme = createTheme({
  components: {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: "white",
          "&:hover": {
            backgroundColor: "black",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "30px",
          padding: "12px",
          height: "40px",
          textTransform: "lowercase",
        },
      },
    },
  },
  palette: {
    primary: {
      main: colors.yellow[500],
    },
  },
});

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />

        <Route path="movies" element={<Movies />} />
        <Route
          path="movies/:id"
          element={<MovieDetail />}
          loader={MovieDetailLoader}
        />

        <Route path="tvshows" element={<TvShows />} />
        <Route
          path="tvshows/:id"
          element={<TvDetail />}
          loader={TvDetailLoader}
        />

        <Route path="topimdb" element={<TopIMDB />} />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
