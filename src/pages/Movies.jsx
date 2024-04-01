import React, { useEffect, useState } from "react";
import { fetchMovie } from "../app/features/popular/popularMovieSlice";
import { useDispatch, useSelector } from "react-redux";
import CardStyle from "../components/CardStyle";
import FilterButton from "../components/FilterButton";
import Paginations from "../components/Paginations";
import Footer from "../components/Footer";

function Movies() {
  const [page, setPage] = useState(1);
  const movieState = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const abortcontroller = new AbortController();

    dispatch(fetchMovie(page));

    return () => abortcontroller.abort();
  }, [dispatch, page]);

  const total_pages = movieState.movies.total_pages;

  return (
    <div>
      {movieState.loading && <div>Loading...</div>}
      {!movieState.loading && movieState.error && (
        <div>Error: {movieState.error}</div>
      )}

      {!movieState.loading && Object.keys(movieState.movies).length > 0 && (
        <div>
          <div className="m-auto w-[90%] mt-6">
            <div className="px-2">
              <div className="flex justify-between px-7">
                <h2 className="text-3xl text-[#D7D4D7]">Popular Movies</h2>
                <FilterButton />
              </div>
              <Paginations
                page={page}
                handlePageChange={handlePageChange}
                total_pages={total_pages}
              />

              <div className="movie-poster grid grid-cols-5 gap-6 justify-items-center mt-16">
                {movieState.movies.results.map((movie) => (
                  <CardStyle key={movie.id} data={movie} dataType="movie" />
                ))}
              </div>
              <Paginations
                page={page}
                handlePageChange={handlePageChange}
                total_pages={total_pages}
              />
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Movies;
