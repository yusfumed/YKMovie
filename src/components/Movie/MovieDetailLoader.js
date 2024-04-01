export const MovieDetailLoader = async ({ params }) => {
  const { id } = params;
  const request1 = await fetch(
    `https://api.themoviedb.org/3/movie/` +
      id +
      `?api_key=5af2eab0e796dc9f0c4e86dff4bbc58f`
  );

  const request2 = await fetch(
    `https://api.themoviedb.org/3/movie/
        ${id}/similar?api_key=5af2eab0e796dc9f0c4e86dff4bbc58f&language=en-US&page=1`
  );

  const [response1, response2] = await Promise.all([request1, request2]);
  const [detail, similar] = await Promise.all([
    response1.json(),
    response2.json(),
  ]);

  return { detail, similar };
};
