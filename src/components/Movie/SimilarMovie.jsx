import React from "react";
import CardStyle from "../CardStyle";

function SimilarMovie(props) {
  return (
    <div className="mx-14 mt-8">
      <div className="mx-4">
        <div className="text-[#c4c2c4] text-3xl font-extralight">
          <h1>You may also like</h1>
        </div>
        <div className="grid grid-cols-6 gap-6 justify-items-center mt-6">
          {props.similar.results
            .map((movie, i) => (
              <CardStyle data={movie} dataType="movie" key={i} /> // Pass 'data' and 'dataType' props
            ))
            .filter((movie, index) => index < 12)}
        </div>
      </div>
    </div>
  );
}

export default SimilarMovie;

