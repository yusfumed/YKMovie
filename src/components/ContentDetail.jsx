import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VideocamIcon from "@mui/icons-material/Videocam";
import { Button, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { useLoaderData, useParams } from "react-router-dom";
import SimilarMovie from "./Movie/SimilarMovie";
import Footer from "./Footer";

const imgURLOriginal = `https://image.tmdb.org/t/p/original`;
const imgURL = `https://image.tmdb.org/t/p/w500`;

function ContentDetail({ dataType }) {
  const { id } = useParams();
  const { detail, similar } = useLoaderData();

  const backgroundStyle = {
    backgroundImage: `url(${
      imgURLOriginal + detail.backdrop_path
    }),linear-gradient(to top, rgba(2,2,2,1) , rgba(0,0,0,0))`,
    height: "105vh",
  };

  return (
    <div className="bg-[rgba(6,6,6,.85)]">
      <div className="bg-cover bg-blend-darken" style={backgroundStyle}>
        <div className="group transition duration-0 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <button className="w-24 h-24 group-hover:bg-yellow-400 group-hover:opacity-100 rounded-ful bg-[#f6f6fb] opacity-30 rounded-full"></button>
          <i
            className="fa fa-caret-right group-hover:text-black text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-6xl"
            aria-hidden="true"
          ></i>
        </div>
      </div>
      <div className="bg-[rgba(2,2,2,.85)] border-b-[1px] border-gray-600">
        <div className="mx-14">
          <div className="h-[16rem] grid content-end mx-4 gap-4">
            <div className="flex float-left z-10">
              <img
                src={imgURL + detail.poster_path}
                alt="cardImage"
                className="cardImage"
              />
              <div className="ml-8 w-full">
                <div>
                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    startIcon={<PlayArrowIcon />}
                    sx={{
                      "&:hover": {
                        backgroundColor: "#f6ad55",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        "&::first-letter": {
                          textTransform: "capitalize",
                        },
                      }}
                    >
                      Watch now
                    </Typography>
                  </Button>
                </div>

                <h2 className="mt-4 font-light text-4xl capitalize text-white">
                  {detail.title || detail.name}
                </h2>
                <div className="flex items-center mt-4 gap-2 text-sm text-white">
                  <Button
                    startIcon={<VideocamIcon />}
                    sx={{
                      backgroundColor: "white",
                      color: "black",
                      borderRadius: "3px",
                      height: "30px",
                    }}
                  >
                    <Typography
                      sx={{
                        "&::first-letter": {
                          textTransform: "capitalize",
                        },
                      }}
                    >
                      Trailer
                    </Typography>
                  </Button>
                  <button className="border-[1px] p-1 border-[#dcdada] rounded">
                    <strong>HD</strong>
                  </button>
                  <Typography
                    color="orange"
                    sx={{ textTransform: "capitalize", fontWeight: "bold" }}
                  >
                    IMDB: {detail.vote_average?.toString().slice(0, 3)}
                  </Typography>
                  <Typography className="text-[#dfdfdf] font-bold">
                    🗣️ Language:{" "}
                    {detail.spoken_languages?.length
                      ? detail.spoken_languages[0].english_name
                      : "Unknown language"}
                  </Typography>
                </div>
                <div className="mt-4 text-[#dfdfdf] font-thin">
                  {detail.overview}
                </div>
                <div className="mt-4 flex text-[#dfdfdf] font-thin">
                  <div>
                    <div className="mr-4">
                      <Typography className="font-normal">Released:</Typography>
                      {detail.release_date}
                    </div>
                    <div className="mr-4 mt-1">
                      <Typography className="font-normal">Genre:</Typography>
                      {detail.genres?.map((genre, index) =>
                        index !== 0 ? (
                          <span key={index}>, {genre.name}</span>
                        ) : (
                          <span key={index}>{genre.name}</span>
                        )
                      )}
                    </div>
                    <div className="mr-4 mt-1">
                      <Typography className="font-normal">
                        {dataType === "movie" ? "Production" : "Original"}{" "}
                        Company:
                      </Typography>{" "}
                      {detail.production_companies?.length
                        ? detail.production_companies
                            .map((company, index) =>
                              index !== 0 ? (
                                <span key={index}>, {company.name}</span>
                              ) : (
                                <span key={index}>{company.name}</span>
                              )
                            )
                            .filter((company, index) => index < 5)
                        : "Unknown company"}
                    </div>
                  </div>
                  <div>
                    <div className="mr-4 ml-4">
                      <Typography className="font-normal">Duration:</Typography>{" "}
                      {dataType === "movie"
                        ? detail.runtime
                        : detail.number_of_episodes}{" "}
                      min <AccessTimeIcon sx={{ fontSize: 18 }} />
                    </div>
                    <div className="mr-4 ml-4 mt-1">
                      <Typography className="font-normal">Country:</Typography>{" "}
                      {detail.production_countries?.length
                        ? detail.production_countries[0].name
                        : "Unknown country"}
                    </div>
                    <div className="mr-4 ml-4 mt-1">
                      <Typography className="font-normal">
                        {dataType === "movie" ? "Budget" : "Budget per episode"}
                        :
                      </Typography>{" "}
                      {detail.budget ? detail.budget : 0}$
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">hello</div>
        </div>
      </div>
      <SimilarMovie similar={similar} />
      <Footer />
    </div>
  );
}

export default ContentDetail;
