import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"
import MovieCard from "../MovieCard/MovieCard";
import FilterDropdown from "../FilterDropdown/FilterDropdown";
const apiKey = import.meta.env.VITE_MOVIELIST_KEY
import "./MovieList.css"

export interface Movie {
  id: number,
  title: string,
  poster_path: string,
}

function MovieList() {
  const [movies, setMovies] = useState<Movie[] | null >(null);

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
    <div>
      <FilterDropdown />
      <div className="MovieList-div d-flex">
      { movies?.map((movie) => 
        <NavLink key={movie.id} to={ `/${movie.id}`} >
        <MovieCard movie={movie} />
        </NavLink>
      ) }
      </div>
    </div>
  )
}

export default MovieList