import ContentDetail from "../ContentDetail";
import { useLoaderData } from "react-router-dom";

function TvDetail() {
  const { detail, similar } = useLoaderData(); // Use data from tvDetailLoader

  return <ContentDetail mediaType="tv" detail={detail} similar={similar} />;
}

export default TvDetail;
