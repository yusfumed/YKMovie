import { useEffect, useState } from "react";
import { fetchTvSeries } from "../app/features/popular/popularTvSlice";
import { useDispatch, useSelector } from "react-redux";
import CardStyle from "../components/CardStyle";
import FilterButton from "../components/FilterButton";
import Paginations from "../components/Paginations";
import Footer from "../components/Footer";

export default function TvShows() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const tvSeriesState = useSelector((state) => state.tvSeries);
  console.log(tvSeriesState);

  const { loading, error, tvSeries } = tvSeriesState;

  useEffect(() => {
    const abortcontroller = new AbortController();

    dispatch(fetchTvSeries(currentPage));

    return () => abortcontroller.abort();
  }, [dispatch, currentPage]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div>
      {loading && <div>Loading...</div>}
      {!loading && error && <div>Error: {error}</div>}
      {!loading && Object.keys(tvSeriesState.tvSeries).length > 0 && (
        <div className="m-auto w-[90%] mt-6">
          <div className="px-2">
            <div className="flex justify-between px-7">
              <h2 className="text-3xl text-[#D7D4D7]">Popular TV Shows</h2>
              <FilterButton />
            </div>
            <Paginations
              page={currentPage}
              handlePageChange={handlePageChange}
              total_pages={tvSeries.total_pages}
            />
            <div className="movie-poster grid grid-cols-5 gap-6 justify-items-center mt-16">
              {tvSeries.results.map((tv) => (
                <CardStyle key={tv.id} data={tv} dataType="tvShow" />
              ))}
            </div>

            <Paginations
              page={currentPage}
              handlePageChange={handlePageChange}
              total_pages={tvSeries.total_pages}
            />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
