import React from "react";
import { Link } from "react-router-dom";
import PlayIcon from "../icons/PlayIcon";

const imgURL = `https://image.tmdb.org/t/p/w500`;

function CardStyle(props) {
  const { data, dataType } = props; // dataType: "movie" or "tvShow"
  console.log(data);
  const Maintitle = dataType === "movie" ? data?.title : data?.original_name;
  const releaseDate =
    dataType === "movie" ? data?.release_date : data?.first_air_date;
  const id = data ? data.id : null;
  const posterPath = data ? data.poster_path : null;
  const dataLength = Array.isArray(data) ? data.length : 0; // Check if data is an array

  return (
    <div className="">
      {data && ( // Check if data exists before rendering
        <div className="group hover:brightness-50 relative text-white rounded overflow-hidden ">
          <div className="absolute right-2 top-2 text-center font-bold bg-white rounded text-black w-8">
            HD
          </div>

          <div className="transition duration-0 opacity-0 group-hover:opacity-100 group-hover:brightness-200 group-hover:duration-500 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
            <Link to={`${dataType === "movie" ? "/movies" : "/tvshows"}/${id}`}>
              <button className="w-14 h-14 rounded-ful rounded-full bg-yellow-500">
                <PlayIcon />
              </button>
            </Link>
          </div>

          <Link to={`${dataType === "movie" ? "/movies" : "/tvshows"}/${id}`}>
            <img className="cardImage" src={imgURL + posterPath} />
          </Link>
        </div>
      )}
      <Link to={`${dataType === "movie" ? "/movies" : "/tvshows"}/${id}`}>
        <h2 className="mt-2 text-white hover:text-yellow-400">
          {Maintitle && Maintitle.length > 20
            ? `${Maintitle.slice(0, 20)}...`
            : Maintitle}
        </h2>
      </Link>
      <div className="flex justify-between text-[#AAAAAA] text-sm my-2 ">
        <span>{releaseDate?.slice(0, 4)}</span>
        <span>
          {data ? `Vote ${data.vote_average.toString().slice(0, 3)}⭐` : ""}
        </span>
        <span>{dataLength > 0 ? `${dataLength} Results` : ""}</span>{" "}
        {/* Display data length */}
        {dataType === "movie" ? (
          <Link to={`/movies/${id}`}>
            <button className="mr-4 border-2 border-[#AAAAAA] rounded-md px-1 ">
              Movie
            </button>
          </Link>
        ) : (
          <Link to={`/tvshows/${id}`}>
            <button className="mr-4 border-2 border-[#AAAAAA] rounded-md px-1 ">
              TV Show
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default CardStyle;
