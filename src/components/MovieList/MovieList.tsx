import { useState, useEffect } from "react";
const apiKey = import.meta.env.VITE_MOVIELIST_KEY

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
      const fetchMovies = async () => {
          try {
              const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
              const data = await res.json();
              setMovies(data.results);
          } catch(error) {
              console.log(error)
          }
      }
      fetchMovies()
  }, []);

  return (
    <div>MovieList</div>
  )
}

export default MovieList