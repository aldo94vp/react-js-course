import { API } from 'config';

export const submitMovie = ({ 
  movieId,
  title,
  movieUrl,
  releaseDate,
  overview,
  genre,
  runtime
}) => {
  const movie = {
    title,
    poster_path: movieUrl,
    release_date: releaseDate,
    overview,
    genres: genre,
    runtime
  }
  if (movieId !== '') movie.id = movieId
  const method = movieId !== '' ? 'PUT' : 'POST';
  return fetch(`${API}/movies`, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(movie)
  }).then(res => {
    !res.ok && console.error('error');
    return res.json();
  }).then(console.log);
}
