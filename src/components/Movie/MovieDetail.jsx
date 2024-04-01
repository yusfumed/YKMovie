import ContentDetail from "../ContentDetail";
import { useLoaderData } from "react-router-dom";


function MovieDetail() {
  const { detail, similar } = useLoaderData(); // Use data from movieDetailLoader

  return <ContentDetail mediaType="movie" detail={detail} similar={similar} />;
}

export default MovieDetail;
